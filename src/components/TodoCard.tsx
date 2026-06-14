import React, { useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../features/toggle-todo/useTodos';

interface TodoCardProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onSave: (id: string, updated: Partial<Todo>) => void;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #f0eeee;
  border-radius: 16px;
  padding: 14px 16px;
  margin-bottom: 10px;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #000;
  flex-shrink: 0;
`;

const ContentArea = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.div<{ $completed: boolean }>`
  font-size: 15px;
  font-weight: 700;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  color: ${({ $completed }) => ($completed ? '#aaaaaa' : '#1a1a1a')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #888888;
  margin-top: 4px;
`;

const Description = styled.div`
  font-size: 12px;
  color: #aaaaaa;
  margin-top: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 6px;
`;

const IconButton = styled.button`
  background: none;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  padding: 8px 10px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { background-color: #f9f9f9; }
`;

const EditInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #eeeeee;
  padding: 4px 0;
  font-size: 14px;
  font-weight: 700;
  outline: none;
  box-sizing: border-box;
  &:focus { border-bottom-color: #000000; }
`;

const EditTimeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
  font-size: 13px;
  color: #888888;
`;

const EditTimeInput = styled.input`
  width: 34px;
  border: none;
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  outline: none;
  background: transparent;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button { -webkit-appearance: none; }
`;

const EditTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 12px;
  color: #888888;
  outline: none;
  resize: none;
  box-sizing: border-box;
  margin-top: 6px;
  &:focus { border-color: #000000; }
`;

const EditActions = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 6px;
`;

const SaveBtn = styled.button`
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
`;

const CancelBtn = styled.button`
  background: none;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  color: #888;
  &:hover { background-color: #f9f9f9; }
`;

const TodoCard: React.FC<TodoCardProps> = ({ todo, onToggle, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editHour, setEditHour] = useState(() => {
    const match = todo.time.match(/(\d+):(\d+)/);
    if (!match) return 9;
    const h = parseInt(match[1]);
    const isPM = todo.time.includes('오후');
    return isPM && h !== 12 ? h + 12 : (!isPM && h === 12 ? 0 : h);
  });
  const [editMinute, setEditMinute] = useState(() => {
    const match = todo.time.match(/(\d+):(\d+)/);
    return match ? parseInt(match[2]) : 0;
  });
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);

  const handleSave = () => {
    const h = editHour % 12 || 12;
    const period = editHour < 12 ? '오전' : '오후';
    const timeStr = `${period} ${String(h).padStart(2, '0')}:${String(editMinute).padStart(2, '0')}`;
    onSave(todo.id, { title: editTitle, time: timeStr, description: editDescription });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <Card>
        <Checkbox type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <ContentArea>
          <EditInput
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            autoFocus
          />
          <EditTimeRow>
            <span>⏰</span>
            <EditTimeInput
              type="number" min={0} max={23}
              value={String(editHour).padStart(2, '0')}
              onChange={e => setEditHour(Math.min(23, Math.max(0, parseInt(e.target.value) || 0)))}
            />
            <span>:</span>
            <EditTimeInput
              type="number" min={0} max={59}
              value={String(editMinute).padStart(2, '0')}
              onChange={e => setEditMinute(Math.min(59, Math.max(0, parseInt(e.target.value) || 0)))}
            />
          </EditTimeRow>
          <EditTextarea
            rows={2}
            value={editDescription}
            onChange={e => setEditDescription(e.target.value)}
          />
        </ContentArea>
        <EditActions>
          <SaveBtn onClick={handleSave}>저장</SaveBtn>
          <CancelBtn onClick={() => setIsEditing(false)}>취소</CancelBtn>
        </EditActions>
      </Card>
    );
  }

  return (
    <Card>
      <Checkbox type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <ContentArea>
        <Title $completed={todo.completed}>{todo.title}</Title>
        <TimeRow>
          <span>⏰</span>
          <span>{todo.time}</span>
        </TimeRow>
        {todo.description && <Description>{todo.description}</Description>}
      </ContentArea>
      <ActionButtons>
        <IconButton onClick={() => setIsEditing(true)}>✏️</IconButton>
        <IconButton onClick={() => onDelete(todo.id)}>🗑️</IconButton>
      </ActionButtons>
    </Card>
  );
};

export default TodoCard;
