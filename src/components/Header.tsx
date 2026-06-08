import React from 'react';
import styled from 'styled-components';

// --- styled-components 스타일 정의 영역 ---
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: #ffffff;
  border-bottom: 1px solid #f0edf0;
  width: 100%;
  box-sizing: border-box;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// 시안 좌측 상단의 별 모양 로고 아이콘 공간
const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #ffcfd2, #d6e4ff, #f3e5f5);
  border-radius: 8px;
`;

const AppTitle = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  font-family: 'Inter', sans-serif;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #f1f5f9;
  color: #334155;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const RegisterButton = styled.button`
  padding: 10px 20px;
  background-color: #0f172a; /* 시안의 짙은 네이비색 버튼 */
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e293b;
  }
`;

// --- 실제 화면에 그려질 컴포넌트 ---
export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        <LogoIcon />
        <AppTitle>Study Planner</AppTitle>
      </LogoSection>
      <ButtonGroup>
        <LoginButton>로그인</LoginButton>
        <RegisterButton>회원가입</RegisterButton>
      </ButtonGroup>
    </HeaderContainer>
  );
};