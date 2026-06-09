import { useState } from 'react';

export interface Todo {
  id: number;
  title: string;
  time: string;
  description: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  { id: 1, title: '역사 에세이 ...', time: '오전 09:00', description: '신인혁명의 영향에 관련 보고서의 초기 개요를 작성하세요.', completed: false },
  { id: 2, title: '유기화학 복습', time: '오후 03:00', description: '다가오는 퀴즈를 위해 탄소-탄소 결합 형성과 반응 메커니즘에 집중하세요.', completed: false },
  { id: 3, title: '수학 퀴즈 연습', time: '오후 09:00', description: '모의고사 세트 B를 완료하세요. 계산기 사용 금지.', completed: false },
];

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const toggleTodo = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (todo: Todo) => {
    setTodos(prev => [...prev, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const remaining = todos.filter(t => !t.completed).length;
  const percentage = todos.length === 0 ? 0 : Math.round((todos.filter(t => t.completed).length / todos.length) * 100);

  return { todos, toggleTodo, addTodo, deleteTodo, remaining, percentage };
};