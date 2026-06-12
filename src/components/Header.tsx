import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  onMoveToLogin?: () => void;
  onMoveToSignup?: () => void;
}

const Header = ({ onMoveToLogin, onMoveToSignup }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        {/* 좌측 로고 영역 */}
        <LogoGroup>
          <LogoIcon src="/src/app/assets/logo.png" alt="App Name" onError={(e) => {
            // 혹시 로고 이미지가 없을 경우를 대비한 대체 텍스트 처리
            e.currentTarget.style.display = 'none';
          }} />
          <LogoText>Study Planner</LogoText>
        </LogoGroup>

        {/* 우측 버튼 영역 */}
        <ButtonGroup>
          <LoginButton type="button" onClick={onMoveToLogin}>
            로그인
          </LoginButton>
          <SignUpButton type="button" onClick={onMoveToSignup}>
            회원가입
          </SignUpButton>
        </ButtonGroup>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

// ====== Styled Components (시안 싱크로율 100%) ======

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1600px; /* 메인 콘텐츠 카드 너비와 통일 */
  padding: 0 40px;   /* 메인 콘텐츠 패딩과 정렬 일치 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const LogoIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const LogoText = styled.h1`
  font-size: 26px;
  font-weight: 800; /* 시안 특유의 두껍고 깔끔한 서체 반영 */
  color: #0f172a;   /* 짙은 네이비/블랙 계열 */
  margin: 0;
  letter-spacing: -0.5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LoginButton = styled.button`
  background-color: #f1f5f9;
  color: #1e293b;
  border: none;
  border-radius: 12px; /* 부드러운 라운딩 처리 */
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const SignUpButton = styled.button`
  background-color: #0f172a; /* 시안의 짙은 네이비/블랙 버튼 색상 */
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e293b;
  }
`;
