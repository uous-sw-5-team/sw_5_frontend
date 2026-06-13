import { useState, useEffect, useCallback } from 'react';
import { planApi as api, PlanResponse } from '../plans/api';

export interface Todo {
  id: string;
  title: string;
  time: string;
  description: string;
  completed: boolean;
  date: string;
}

const planToTodo = (plan: PlanResponse): Todo => ({
  id: plan.id,
  title: plan.title,
  time: apiTimeToTodoTime(plan.time),   // "09:00" → "오전 09:00"
  description: plan.description ?? '',
  completed: plan.completed,
  date: plan.date,
});

// "오전 09:00" → "09:00" (24h, API 전송용)
const todoTimeToApiTime = (time: string): string | undefined => {
  if (!time) return undefined;
  const parts = time.split(' ');
  if (parts.length !== 2) return time; // 이미 "HH:MM" 형식이면 그대로
  const [period, hhmm] = parts;
  const [h, m] = hhmm.split(':').map(Number);
  const hour = period === '오전'
    ? (h === 12 ? 0 : h)
    : (h === 12 ? 12 : h + 12);
  return `${String(hour).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

// "09:00" (24h) → "오전 09:00" (UI 표시용)
const apiTimeToTodoTime = (time: string | null): string => {
  if (!time) return '';
  const [h, m] = time.split(':').map(Number);
  const period = h < 12 ? '오전' : '오후';
  const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${period} ${String(displayH).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

const timeToMinutes = (time: string): number => {
  if (!time) return 0;
  const parts = time.split(' ');
  if (parts.length === 2) {
    const [period, hhmm] = parts;
    const [h, m] = hhmm.split(':').map(Number);
    const hour = period === '오전' ? (h === 12 ? 0 : h) : (h === 12 ? 12 : h + 12);
    return hour * 60 + m;
  }
  // "HH:MM" 형식
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};

const sortByTime = (todos: Todo[]) =>
  [...todos].sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

export const useTodos = (dateStr: string) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = useCallback(async () => {
    try {
      const plans = await api.listPlans({ date: dateStr });
      setTodos(sortByTime(plans.map(planToTodo)));
    } catch (e) {
      console.error('플랜 목록 조회 실패', e);
    }
  }, [dateStr]);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const toggleTodo = async (id: string) => {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;
    try {
      const updated = await api.updatePlan(id, { completed: !todo.completed });
      setTodos(prev => prev.map(t => t.id === id ? planToTodo(updated) : t));
    } catch (e) {
      console.error('완료 토글 실패', e);
    }
  };

  const addTodo = async (todo: Omit<Todo, 'id'>) => {
    try {
      const created = await api.createPlan({
        date: todo.date,
        title: todo.title,
        description: todo.description || undefined,
        time: todoTimeToApiTime(todo.time), // "오전 09:00" → "09:00"
      });
      setTodos(prev => sortByTime([...prev, planToTodo(created)]));
    } catch (e) {
      console.error('플랜 생성 실패', e);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await api.deletePlan(id);
      setTodos(prev => prev.filter(t => t.id !== id));
    } catch (e) {
      console.error('플랜 삭제 실패', e);
    }
  };

  const updateTodo = async (id: string, updated: Partial<Todo>) => {
    try {
      const plan = await api.updatePlan(id, {
        title: updated.title,
        description: updated.description,
        time: updated.time ? todoTimeToApiTime(updated.time) : undefined,
        completed: updated.completed,
      });
      setTodos(prev => sortByTime(prev.map(t => t.id === id ? planToTodo(plan) : t)));
    } catch (e) {
      console.error('플랜 수정 실패', e);
    }
  };

  return { todos, toggleTodo, addTodo, deleteTodo, updateTodo };
};