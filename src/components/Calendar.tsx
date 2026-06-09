import React from 'react';
import styled from 'styled-components';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar = ({ selectedDate, onDateSelect }: CalendarProps) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: lastDate }, (_, i) => i + 1),
  ];

  const isSelected = (date: number) =>
    selectedDate.getFullYear() === year &&
    selectedDate.getMonth() === month - 1 &&
    selectedDate.getDate() === date;

  const handleClick = (date: number) => {
    onDateSelect(new Date(year, month - 1, date));
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Title>{year}년 {month}월 ▾</Title>
        <NavButtons>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </NavButtons>
      </CalendarHeader>

      <Grid>
        {days.map((day, i) => (
          <DayHeader key={day} isSunday={i === 0}>{day}</DayHeader>
        ))}
        {cells.map((date, i) => (
          <Cell
            key={i}
            isEmpty={date === null}
            isSelected={date !== null && isSelected(date)}
            onClick={() => date !== null && handleClick(date)}
          >
            {date !== null && (
              <DateNumber isSunday={i % 7 === 0}>
                {date}
              </DateNumber>
            )}
          </Cell>
        ))}
      </Grid>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #edebeb;
  border-radius: 20px;
  overflow: hidden;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #edebeb;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #031635;
  margin: 0;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #edebeb;
    background: white;
    cursor: pointer;
    font-weight: bold;
    color: #444;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover { background: #f9f9f9; }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 1px solid #edebeb;
`;

const DayHeader = styled.div<{ isSunday: boolean }>`
  border-right: 1px solid #edebeb;
  border-bottom: 1px solid #edebeb;
  padding: 12px 0;
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  color: ${({ isSunday }) => (isSunday ? '#e05c5c' : '#031635')};
  background: #fafafa;
`;

const Cell = styled.div<{ isEmpty: boolean; isSelected: boolean }>`
  border-right: 1px solid #edebeb;
  border-bottom: 1px solid #edebeb;
  min-height: 110px;
  padding: 10px;
  background: ${({ isEmpty, isSelected }) =>
    isSelected ? '#fff3f3' : isEmpty ? '#f5f0e8' : 'white'};
  outline: ${({ isSelected }) => (isSelected ? '2px solid #e05c5c' : 'none')};
  outline-offset: -2px;
  box-sizing: border-box;
  cursor: ${({ isEmpty }) => (isEmpty ? 'default' : 'pointer')};
  &:hover {
    background: ${({ isEmpty }) => (isEmpty ? '#f5f0e8' : '#fff8f8')};
  }
`;

const DateNumber = styled.span<{ isSunday: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ isSunday }) => (isSunday ? '#e05c5c' : '#031635')};
`;