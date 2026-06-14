import { useState } from 'react';
import { Todo } from '../toggle-todo/useTodos';
import { updatePlan } from './editApi';

// "오전 09:00" → "09:00" (24h)
const displayTimeToApi = (time: string): string => {
  if (!time) return '';
  const parts = time.split(' ');
  if (parts.length !== 2) return time;
  const [period, hhmm] = parts;
  const [h, m] = hhmm.split(':').map(Number);
  const hour = period === '오전' ? (h === 12 ? 0 : h) : h === 12 ? 12 : h + 12;
  return `${String(hour).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

export const useEditTodo = (
  todos: Todo[],
  setTodos: (todos: Todo[]) => void,
  loadTodos: () => void
) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const startEdit = (id: string) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = async (id: string, updated: Partial<Todo>) => {
    try {
      await updatePlan(id, {
        title: updated.title,
        description: updated.description,
        time: updated.time ? displayTimeToApi(updated.time) : undefined,
      });
      loadTodos();
    } catch (e) {
      console.error('플랜 수정 실패', e);
    }
    setEditingId(null);
  };

  return { editingId, startEdit, cancelEdit, saveEdit };
};
