import React from "react";
import styled from "styled-components";

interface HeaderProps {
  isAuthenticated?: boolean;
  onMoveToLogin?: () => void;
  onMoveToSignup?: () => void;
}

const Header = ({ isAuthenticated = false, onMoveToLogin, onMoveToSignup }: HeaderProps) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoGroup>
          <LogoIcon
            src="/src/app/assets/logo.png"
            alt="Study Planner"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <LogoText>Study Planner</LogoText>
        </LogoGroup>

        {!isAuthenticated && (
          <ButtonGroup>
            <LoginButton type="button" onClick={onMoveToLogin}>
              로그인
            </LoginButton>
            <SignUpButton type="button" onClick={onMoveToSignup}>
              회원가입
            </SignUpButton>
          </ButtonGroup>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

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
  max-width: 1600px;
  padding: 0 40px;
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
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  letter-spacing: 0;
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
  border-radius: 12px;
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
  background-color: #0f172a;
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
