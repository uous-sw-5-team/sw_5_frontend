import { useState } from 'react';
import { Todo } from '../toggle-todo/useTodos';

export const useEditTodo = (
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const startEdit = (id: string) => {
    setEditingId(id);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const saveEdit = (id: string, updated: Partial<Todo>) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, ...updated } : todo
      )
    );
    setEditingId(null);
  };

  return { editingId, startEdit, cancelEdit, saveEdit };
};
