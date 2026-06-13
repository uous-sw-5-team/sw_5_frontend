import { useState, useEffect, useCallback } from 'react';
import { api, PlanResponse } from '../../api';

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
  time: plan.time ?? '',
  description: plan.description ?? '',
  completed: plan.completed,
  date: plan.date,
});

const timeToMinutes = (time: string): number => {
  if (!time) return 0;
  const [period, hhmm] = time.split(' ');
  const [h, m] = hhmm.split(':').map(Number);
  const hour = period === '오전'
    ? (h === 12 ? 0 : h)
    : (h === 12 ? 12 : h + 12);
  return hour * 60 + m;
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
        description: todo.description,
        time: todo.time,
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
        time: updated.time,
        completed: updated.completed,
      });
      setTodos(prev => sortByTime(prev.map(t => t.id === id ? planToTodo(plan) : t)));
    } catch (e) {
      console.error('플랜 수정 실패', e);
    }
  };

  return { todos, toggleTodo, addTodo, deleteTodo, updateTodo };
};