import React from 'react';
import styled from 'styled-components';

interface TodoCardProps {
  title: string;
  time: string;
  description: string;
  completed: boolean;
  onToggle: () => void;
}

const TodoCard = ({ title, time, description, completed, onToggle }: TodoCardProps) => {
  return (
    <CardWrapper completed={completed}>
      <TopRow>
        <Checkbox checked={completed} onChange={onToggle} />
        <TitleArea>
          <CardTitle completed={completed}>{title}</CardTitle>
        </TitleArea>
        <TimeAndEdit>
          <TimeText>⏰ {time}</TimeText>
          <EditButton>✏️</EditButton>
        </TimeAndEdit>
      </TopRow>
      <CardDescription>{description}</CardDescription>
    </CardWrapper>
  );
};

export default TodoCard;

const CardWrapper = styled.div<{ completed: boolean }>`
  padding: 16px 20px;
  border: 1px solid #f0eeee;
  border-radius: 16px;
  background-color: #ffffff;
  margin-bottom: 12px;
  opacity: ${({ completed }) => (completed ? 0.5 : 1)};
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #000000;
  flex-shrink: 0;
`;

const TitleArea = styled.div`
  flex: 1;
`;

const CardTitle = styled.p<{ completed: boolean }>`
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const CardDescription = styled.p`
  font-size: 13px;
  color: #888888;
  margin: 0 0 0 28px;
  line-height: 1.5;
`;

const TimeAndEdit = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

const TimeText = styled.span`
  font-size: 12px;
  color: #888888;
  white-space: nowrap;
`;

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  color: #aaaaaa;
  &:hover { color: #555555; }
`;