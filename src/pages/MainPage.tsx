import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import FocusTracker from '../components/FocusTracker';
import { useTodos } from '../features/toggle-todo/useTodos';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #faf8f5;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 24px;
  padding: 32px 40px 40px 40px;
  flex: 1;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentCard = styled.div`
  background-color: #ffffff;
  border-radius: 40px;
  padding: 40px 36px;
  min-height: 640px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
`;

const DateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const DateLargeText = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
`;

const NewPlanButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  &:hover { background-color: #222222; }
`;

export const MainPage = () => {
  const { todos, toggleTodo, remaining, percentage } = useTodos();

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ContentCard>
          <Calendar />
        </ContentCard>
        <ContentCard>
          <DateHeader>
            <DateLargeText>6월 15일 할 일</DateLargeText>
            <NewPlanButton>+ 새 일정</NewPlanButton>
          </DateHeader>
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            remaining={remaining}
          />
          <FocusTracker percentage={percentage} />
        </ContentCard>
      </MainContent>
    </PageContainer>
  );
};

export default MainPage;