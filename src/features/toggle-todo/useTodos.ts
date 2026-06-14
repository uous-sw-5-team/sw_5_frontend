import { useState, useEffect, useCallback } from "react";
import { fetchPlans, PlanResponse } from "../filter-todos/filterApi";
import { togglePlan } from "./toggleApi";

export interface Todo {
  id: string;
  title: string;
  time: string;
  description: string;
  completed: boolean;
  date: string;
  photos: string[];
}

// "09:00" (24h) → "오전 09:00" (UI 표시용)
const apiTimeToDisplay = (time: string | null): string => {
  if (!time) return "";
  const [h, m] = time.split(":").map(Number);
  const period = h < 12 ? "오전" : "오후";
  const displayH = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${period} ${String(displayH).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
};

const planToTodo = (plan: PlanResponse): Todo => ({
  id: plan.id,
  title: plan.title,
  time: apiTimeToDisplay(plan.time),
  description: plan.description ?? "",
  completed: plan.completed,
  date: plan.date,
  photos: plan.photos ?? [],
});

const timeToMinutes = (time: string): number => {
  if (!time) return 0;
  const parts = time.split(" ");
  if (parts.length === 2) {
    const [period, hhmm] = parts;
    const [h, m] = hhmm.split(":").map(Number);
    const hour =
      period === "오전" ? (h === 12 ? 0 : h) : h === 12 ? 12 : h + 12;
    return hour * 60 + m;
  }
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const sortByTime = (todos: Todo[]) =>
  [...todos].sort((a, b) => timeToMinutes(a.time) - timeToMinutes(b.time));

export const useTodos = (dateStr: string) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = useCallback(async () => {
    try {
      const plans = await fetchPlans({ date: dateStr });
      setTodos(sortByTime(plans.map(planToTodo)));
    } catch (e) {
      console.error("플랜 목록 조회 실패", e);
    }
  }, [dateStr]);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const remaining = todos.filter((t) => !t.completed).length;
  const percentage =
    todos.length === 0
      ? 0
      : Math.round(
          (todos.filter((t) => t.completed).length / todos.length) * 100
        );

  const toggleTodo = async (id: string) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    try {
      await togglePlan(id, !todo.completed);
      loadTodos();
    } catch (e) {
      console.error("완료 토글 실패", e);
    }
  };

  return { todos, setTodos, remaining, percentage, loadTodos, toggleTodo };
};
