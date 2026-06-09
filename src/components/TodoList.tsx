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
  const completed = todos.filter(t => t.completed).length;

  return (
    <ListWrapper>
      <BadgeRow>
        <Badge type="completed">{completed}개 완료</Badge>
        <Badge type="remaining">{remaining}개 남음</Badge>
      </BadgeRow>
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

const BadgeRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const Badge = styled.span<{ type: 'completed' | 'remaining' }>`
  display: inline-block;
  background-color: ${({ type }) => type === 'completed' ? '#e8f5e9' : '#f5f0e8'};
  color: ${({ type }) => type === 'completed' ? '#4caf50' : '#8a7560'};
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
`;