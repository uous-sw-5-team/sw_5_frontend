import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const today = new Date();
  const year = 2024;
  const month = 6; // 6월

  const firstDay = new Date(year, month - 1, 1).getDay(); // 첫째 날 요일 (0=일)
  const lastDate = new Date(year, month, 0).getDate(); // 마지막 날짜

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  // 빈 칸 + 날짜 배열 생성
  const cells = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: lastDate }, (_, i) => i + 1),
  ];

  const isToday = (date: number) =>
    today.getFullYear() === year &&
    today.getMonth() === month - 1 &&
    today.getDate() === date;

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Title>2024년 6월 ▾</Title>
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
          <Cell key={i} isEmpty={date === null} isToday={date !== null && isToday(date)}>
            {date !== null && (
              <DateNumber isSunday={i % 7 === 0}>{date}</DateNumber>
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

const Cell = styled.div<{ isEmpty: boolean; isToday: boolean }>`
  border-right: 1px solid #edebeb;
  border-bottom: 1px solid #edebeb;
  min-height: 110px;
  padding: 10px;
  background: ${({ isEmpty }) => (isEmpty ? '#f5f0e8' : 'white')};
  outline: ${({ isToday }) => (isToday ? '2px solid #f4a0a0' : 'none')};
  outline-offset: -2px;
  box-sizing: border-box;
`;

const DateNumber = styled.span<{ isSunday: boolean }>`
  font-size: 14px;
  font-weight: 500;
  color: ${({ isSunday }) => (isSunday ? '#e05c5c' : '#031635')};
`;