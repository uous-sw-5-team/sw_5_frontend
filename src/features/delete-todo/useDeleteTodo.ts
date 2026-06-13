import { Todo } from '../toggle-todo/useTodos';

export const useDeleteTodo = (
  todos: Todo[],
  setTodos: (todos: Todo[]) => void
) => {
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return { deleteTodo };
};
