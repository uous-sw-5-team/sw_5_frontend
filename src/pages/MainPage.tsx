import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header'; // 방금 만든 헤더 불러오기

// --- styled-components 메인 레이아웃 정의 영역 ---

// 전체 화면을 감싸는 컨테이너 (위에서 아래로 수직 배치)
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #faf8f5; /* 시안의 은은한 점 패턴 배경 느낌을 주는 미색 */
`;

// 헤더 아래의 메인 콘텐츠 영역 (좌우 2분할 그리드가 들어가는 곳)
const MainContent = styled.main`
  display: grid;
  grid-template-columns: 1.78fr 1fr; /* 시안의 약 64% : 36% 비율 반영 */
  gap: 32px;
  padding: 40px;
  flex: 1;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

// 좌측 달력 공간이 들어갈 카드 스타일 컴포넌트
const LeftSection = styled.section`
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  border: 1px solid #f0edf0;
  padding: 24px;
  min-height: 600px; /* 구성을 위한 임시 높이 */
`;

// 우측 일정/집중도 컴포넌트들이 세로로 배치될 공간
const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

// 우측 일정 리스트 카드 스타일 컴포넌트
const TodoCard = styled.div`
  background-color: #ffffff;
  border-radius: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.02);
  border: 1px solid #f0edf0;
  padding: 24px;
  flex: 1;
`;

// 우측 집중도 그래프 카드 스타일 컴포넌트
const FocusCard = styled.div`
  background-color: #0f172a; /* 시안 최하단의 어두운 네이비색 집중도 카드 */
  border-radius: 24px;
  padding: 24px;
  color: #ffffff;
  height: 160px;
`;

// --- 실제 화면에 그려질 MainPage 컴포넌트 ---
export const MainPage: React.FC = () => {
  return (
    <PageContainer>
      {/* 1. 최상단 헤더 배치 */}
      <Header />

      {/* 2. 하단 2분할 메인 콘텐츠 배치 */}
      <MainContent>
        {/* 좌측: 달력 구역 */}
        <LeftSection>
          <h2>달력 컴포넌트가 들어올 자리입니다.</h2>
        </LeftSection>

        {/* 우측: 일정 및 집중도 구역 */}
        <RightSection>
          <TodoCard>
            <h2>오늘의 할 일 리스트 자리입니다.</h2>
          </TodoCard>
          <FocusCard>
            <h2>오늘의 집중도 자리입니다.</h2>
          </FocusCard>
        </RightSection>
      </MainContent>
    </PageContainer>
  );
};

export default MainPage;