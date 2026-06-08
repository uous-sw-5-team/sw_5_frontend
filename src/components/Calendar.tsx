import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <CalendarContainer>
      {/* 1. 상단 헤더: 년/월 선택 및 화살표 */}
      <HeaderSection>
        <YearMonthDisplay>
          2024년 6월 <span style={{ fontSize: '18px', color: '#888' }}>▼</span>
        </YearMonthDisplay>
        <NavContainer>
          <NavButton>&lt;</NavButton>
          <NavButton>&gt;</NavButton>
        </NavContainer>
      </HeaderSection>

      {/* 2. 요일 표시 */}
      <DaysRow>
        {days.map((day) => (
          <DayCell key={day}>{day}</DayCell>
        ))}
      </DaysRow>

      {/* 3. 날짜 그리드 */}
      <GridSection>
        {dates.map((date) => (
          <DateCell key={date}>{date}</DateCell>
        ))}
      </GridSection>
    </CalendarContainer>
  );
};

export default Calendar;

// ====== 스타일링 (기획 시안 레이아웃 최적화) ======

const CalendarContainer = styled.div`
  width: 100%;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const YearMonthDisplay = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const NavButton = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 12px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover { background: #f5f5f5; }
`;

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 16px;
`;

const DayCell = styled.div`
  text-align: center;
  font-weight: 600;
  color: #777;
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
`;

const DateCell = styled.div`
  height: 100px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 8px;
  font-size: 14px;
  color: #333;
`;