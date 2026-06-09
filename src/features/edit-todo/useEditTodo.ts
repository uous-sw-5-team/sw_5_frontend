import { useState } from 'react';
import { Todo } from '../toggle-todo/useTodos';

export const useEditTodo = (
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
) => {
  const [editingId, setEditingId] = useState<number | null>(null);

  const startEdit = (id: number) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = (id: number, updated: Partial<Todo>) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, ...updated } : todo
      )
    );
    setEditingId(null);
  };

  return { editingId, startEdit, cancelEdit, saveEdit };
};