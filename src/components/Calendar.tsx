import React, { useState } from 'react';
import styled from 'styled-components';

interface CalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const Calendar = ({ selectedDate, onDateSelect }: CalendarProps) => {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth() + 1);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const handlePrev = () => {
    if (month === 1) { setYear(y => y - 1); setMonth(12); }
    else { setMonth(m => m - 1); }
  };

  const handleNext = () => {
    if (month === 12) { setYear(y => y + 1); setMonth(1); }
    else { setMonth(m => m + 1); }
  };

  const handleYearSelect = (y: number) => setYear(y);
  const handleMonthSelect = (m: number) => {
    setMonth(m);
    setShowDropdown(false);
  };

  const yearList = Array.from({ length: 10 }, (_, i) => today.getFullYear() - 3 + i);

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Title onClick={() => setShowDropdown(d => !d)}>
          {year}년 {month}월 ▾
        </Title>
        <NavButtons>
          <button onClick={handlePrev}>{'<'}</button>
          <button onClick={handleNext}>{'>'}</button>
        </NavButtons>
      </CalendarHeader>

      {showDropdown && (
        <Dropdown>
          <DropdownSection>
            <DropdownLabel>📅 연도 선택</DropdownLabel>
            <YearList>
              {yearList.map(y => (
                <YearItem
                  key={y}
                  isSelected={y === year}
                  onClick={() => handleYearSelect(y)}
                >
                  {y}년
                </YearItem>
              ))}
            </YearList>
          </DropdownSection>
          <DropdownSection>
            <DropdownLabel>📅 월 선택</DropdownLabel>
            <MonthGrid>
              {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                <MonthItem
                  key={m}
                  isSelected={m === month}
                  onClick={() => handleMonthSelect(m)}
                >
                  {m}월
                </MonthItem>
              ))}
            </MonthGrid>
          </DropdownSection>
        </Dropdown>
      )}

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
  overflow: visible;
  position: relative;
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
  cursor: pointer;
  user-select: none;
  &:hover { opacity: 0.7; }
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

const Dropdown = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 20px 24px;
  border: 2px solid #d0ccc8;
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const DropdownLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const YearList = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 4px;
  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
`;

const YearItem = styled.div<{ isSelected: boolean }>`
  flex-shrink: 0;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? '800' : '500')};
  background: ${({ isSelected }) => (isSelected ? '#031635' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#031635')};
  border: 1px solid #d0ccc8;
  cursor: pointer;
  &:hover { background: ${({ isSelected }) => (isSelected ? '#031635' : '#f0f0f0')}; }
`;

const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const MonthItem = styled.div<{ isSelected: boolean }>`
  padding: 10px 0;
  text-align: center;
  border-radius: 10px;
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? '800' : '500')};
  background: ${({ isSelected }) => (isSelected ? '#031635' : 'white')};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#031635')};
  border: 1px solid #d0ccc8;
  cursor: pointer;
  &:hover { background: ${({ isSelected }) => (isSelected ? '#031635' : '#f0f0f0')}; }
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