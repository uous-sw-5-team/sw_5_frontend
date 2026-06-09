import React from 'react';
import styled from 'styled-components';
import TodoCard from './TodoCard';
import { Todo } from '../features/toggle-todo/useTodos';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onSave: (id: number, updated: Partial<Todo>) => void;
  remaining: number;
}

const TodoList = ({ todos, onToggle, onDelete, onSave, remaining }: TodoListProps) => {
  return (
    <ListWrapper>
      <Badge>{remaining}개 남음</Badge>
      {todos.map(todo => (
        <TodoCard
          key={todo.id}
          todo={todo}
          onToggle={() => onToggle(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onSave={onSave}
        />
      ))}
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Badge = styled.span`
  display: inline-block;
  background-color: #f5f0e8;
  color: #8a7560;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 16px;
  align-self: flex-start;
`;