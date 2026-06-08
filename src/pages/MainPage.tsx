import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Calendar from '../components/Calendar'; 

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #faf8f5;
`;

const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1.78fr 1fr;
  gap: 32px;
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
  padding: 56px 48px;
  min-height: 640px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02);
  box-sizing: border-box;
`;

const DateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
`;

const DateTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DateLargeText = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.2;
`;

const NewPlanButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  &:hover { background-color: #222222; }
`;

const GuideText = styled.p`
  font-size: 16px;
  color: #b0b0b0;
  line-height: 1.8;
  text-align: center;
  margin: 180px auto 0 auto;
  max-width: 320px;
  word-break: keep-all;
`;

export const MainPage = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <ContentCard>
          <Calendar /> 
        </ContentCard>
        <ContentCard>
          <DateHeader>
            <DateTextGroup>
              <DateLargeText>6월 15일</DateLargeText>
              <DateLargeText>일요일</DateLargeText>
            </DateTextGroup>
            <NewPlanButton>+ 새 일정</NewPlanButton>
          </DateHeader>
          <GuideText>
            [이 영역에 들어갈 TodoList 카드들은 components에서 구현하여 조립합니다]
          </GuideText>
        </ContentCard>
      </MainContent>
    </PageContainer>
  );
};

export default MainPage;