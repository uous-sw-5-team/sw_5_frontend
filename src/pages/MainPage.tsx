import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header'; // 📌 9번 작업: 완성된 헤더 컴포넌트 불러오기

// --- ♻️ styled-components 디자인 정의 영역 ---

// 전체 배경 컨테이너
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #faf8f5; /* 시안 특유의 은은한 아이보리 미색 배경 */
`;

// 좌우 분할 그리드가 적용되는 메인 콘텐츠 영역
const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1.78fr 1fr; /* 시안의 64% : 36% 비율 */
  gap: 32px;
  padding: 32px 40px 40px 40px; /* 헤더 아래 여백 최적화 */
  flex: 1;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

// 흰색 라운드 카드 구조
const ContentCard = styled.div`
  background-color: #ffffff;
  border-radius: 40px; /* 원본의 크고 부드러운 라운딩 값 반영 */
  padding: 56px 48px;  /* 내부 여백 */
  min-height: 640px;   /* 시원하게 떨어지는 카드 높이 */
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.02); /* 부드러운 그림자 */
  box-sizing: border-box;
`;

// 달력 년/월 타이틀 스타일
const CalendarTitle = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #1a1a1a;
  margin: 0 0 48px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// 날짜 헤더 영역 (우측 카드용)
const DateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 48px;
`;

// 6월 15일 일요일 텍스트 정렬 Layout
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

// '+ 새 일정' 버튼 스타일
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
  
  &:hover {
    background-color: #222222;
  }
`;

// 중앙 안내용 더미 가이드 텍스트 스타일
const GuideText = styled.p`
  font-size: 16px;
  color: #b0b0b0; /* 원본 특유의 연한 회색 본문 텍스트 색상 */
  line-height: 1.8;
  text-align: center;
  margin: 180px auto 0 auto; /* 중앙 배치를 위한 상단 여백 설정 */
  max-width: 320px;
  word-break: keep-all;
`;

export const MainPage = () => {
  return (
    <PageContainer>
      {/* 📌 9번 작업: 시안과 동일한 Study Planner 상단 헤더 배치 */}
      <Header />
      
      <MainContent>
        {/* 1. 좌측 캘린더 영역 카드 */}
        <ContentCard>
          <CalendarTitle>
            2024년 6월 <span style={{ fontSize: '20px', color: '#666', marginLeft: '4px' }}>▼</span>
          </CalendarTitle>
          <GuideText>
            [이 영역에 들어갈 Calendar 컴포넌트 스타일은 components에서 완성할 예정입니다]
          </GuideText>
        </ContentCard>

        {/* 2. 우측 투두 리스트 영역 카드 */}
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