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
  const allCompleted = todos.length > 0 && todos.every(t => t.completed);

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
      {allCompleted && (
        <CompleteCard>
          <CompleteIcon>✅</CompleteIcon>
          <CompleteTitle>모든 할 일을 완료했습니다!</CompleteTitle>
          <CompleteSubtitle>학습 노트 사진을 업로드하고 인증하세요.</CompleteSubtitle>
          <UploadButton>⬆ 사진 업로드</UploadButton>
        </CompleteCard>
      )}
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

const CompleteCard = styled.div`
  border: 2px dashed #f4a0a0;
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  background: #fff8f8;
`;

const CompleteIcon = styled.div`
  font-size: 32px;
  background: #ffe0e0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

const CompleteTitle = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: #1a1a1a;
`;

const CompleteSubtitle = styled.div`
  font-size: 13px;
  color: #aaaaaa;
  margin-bottom: 8px;
`;

const UploadButton = styled.button`
  width: 100%;
  background: #031635;
  color: white;
  border: none;
  border-radius: 14px;
  padding: 16px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #0a2a5e; }
`;