import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Calendar from '../components/Calendar';
import TodoList from '../components/TodoList';
import FocusTracker from '../components/FocusTracker';
import { useTodos } from '../features/toggle-todo/useTodos';
import { useCreateTodo } from '../features/create-todo/useCreateTodo';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  width: 100%;
  background-color: #faf8f5;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 16px;
  padding: 16px 28px 20px 28px;
  flex: 1;
  min-height: 0;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentCard = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  padding: 16px 22px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
  overflow: hidden;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
  height: 100%;
`;

const RightCard = styled(ContentCard)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-height: 0;
`;

const TodoScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

const DateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

const DateLargeText = styled.h2`
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
`;

const NewPlanButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
  &:hover { background-color: #222222; }
`;

const FormCard = styled.div`
  border: 1px solid #f0eeee;
  border-radius: 16px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-shrink: 0;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #eeeeee;
  padding: 6px 0;
  font-size: 15px;
  font-weight: 700;
  color: #1a1a1a;
  outline: none;
  box-sizing: border-box;
  &:focus { border-bottom-color: #000000; }
`;

const TimeInputRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #888888;
  background-color: #f9f9f9;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 6px 12px;
  width: fit-content;
`;

const TimeInput = styled.input`
  width: 36px;
  border: none;
  background: transparent;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button { -webkit-appearance: none; }
`;

const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  color: #888888;
  outline: none;
  resize: none;
  box-sizing: border-box;
  &:focus { border-color: #000000; }
`;

const FormButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

const SaveButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background: none;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  color: #888888;
`;

const toDateStr = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

const toKoreanDate = (date: Date) =>
  `${date.getMonth() + 1}월 ${date.getDate()}일 할 일`;

export const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const { todos, toggleTodo, addTodo, deleteTodo, updateTodo, percentage } = useTodos();
  const { isFormOpen, form, openForm, closeForm, handleChange, handleHourChange, handleMinuteChange, handleSubmit } =
    useCreateTodo(addTodo, selectedDate);

  const dateStr = toDateStr(selectedDate);
  const filteredTodos = todos.filter(t => t.date === dateStr);
  const remaining = filteredTodos.filter(t => !t.completed).length;

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ContentCard>
          <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
        </ContentCard>
        <RightColumn>
          <RightCard>
            <DateHeader>
              <DateLargeText>{toKoreanDate(selectedDate)}</DateLargeText>
              <NewPlanButton onClick={openForm}>+ 새 일정</NewPlanButton>
            </DateHeader>
            {isFormOpen && (
              <FormCard>
                <Input
                  placeholder="일정 제목"
                  value={form.title}
                  onChange={e => handleChange('title', e.target.value)}
                  autoFocus
                />
                <TimeInputRow>
                  <span>⏰</span>
                  <TimeInput
                    type="number"
                    min={0}
                    max={23}
                    value={String(form.hour).padStart(2, '0')}
                    onChange={e => handleHourChange(e.target.value)}
                  />
                  <span>:</span>
                  <TimeInput
                    type="number"
                    min={0}
                    max={59}
                    value={String(form.minute).padStart(2, '0')}
                    onChange={e => handleMinuteChange(e.target.value)}
                  />
                </TimeInputRow>
                <Textarea
                  placeholder="상세 내용"
                  rows={2}
                  value={form.description}
                  onChange={e => handleChange('description', e.target.value)}
                />
                <FormButtons>
                  <SaveButton onClick={handleSubmit}>저장</SaveButton>
                  <CancelButton onClick={closeForm}>취소</CancelButton>
                </FormButtons>
              </FormCard>
            )}
            <TodoScrollArea>
              <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onSave={updateTodo}
                remaining={remaining}
              />
            </TodoScrollArea>
          </RightCard>
          <FocusTracker percentage={percentage} />
        </RightColumn>
      </MainContent>
    </PageContainer>
  );
};

export default MainPage;