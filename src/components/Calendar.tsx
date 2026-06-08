import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #edebeb;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #031635;
  display: flex;
  align-items: center;
  gap: 8px;
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
    &:hover { background: #f9f9f9; }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #edebeb;
  border-left: 1px solid #edebeb;
`;

const Cell = styled.div`
  border-right: 1px solid #edebeb;
  border-bottom: 1px solid #edebeb;
  padding: 10px;
  min-height: 100px;
  font-size: 14px;
  color: #031635;
`;

const DayHeader = styled(Cell)`
  font-weight: 600;
  text-align: center;
  padding: 15px 0;
  min-height: auto;
  border-bottom: 1px solid #edebeb;
`;

const Calendar = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  // 예시 날짜 배열 (시안에 맞춰 1~30일)
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

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
        {days.map(day => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}
        {dates.map(date => (
          <Cell key={date}>
            {date}
            {/* 여기에 일정 배지나 이미지 등을 조건부로 추가 가능 */}
          </Cell>
        ))}
      </Grid>
    </CalendarContainer>
  );
};

export default Calendar;