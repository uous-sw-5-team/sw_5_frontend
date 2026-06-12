import { useState } from "react";
import { Lock, User } from "lucide-react";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthLayout from "../components/auth/AuthLayout";
import AuthSwitchLink from "../components/auth/AuthSwitchLink";
import TextField from "../components/auth/TextField";

interface LoginPageProps {
  onMoveToSignup: () => void;
  onLoginSuccess: () => void;
}

const LoginPage = ({ onMoveToSignup, onLoginSuccess }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout
      title="환영합니다."
      subtitle=""
      pageSubtitle="당신의 성공을 설계하세요"
    >
      <AuthForm
        submitLabel="로그인"
        onSubmit={(event) => {
          event.preventDefault();
          if (!username.trim() || !password.trim()) {
            return;
          }
          onLoginSuccess();
        }}
      >
        <TextField
          id="login-username"
          label="아이디 / 사용자 이름"
          autoComplete="username"
          icon={<User size={20} />}
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <PasswordHeader>
          <PasswordLabel htmlFor="login-password">비밀번호</PasswordLabel>
          <FindPasswordButton type="button">비밀번호를 잊으셨나요?</FindPasswordButton>
        </PasswordHeader>
        <TextField
          id="login-password"
          label=""
          type="password"
          autoComplete="current-password"
          icon={<Lock size={20} />}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <RememberRow>
          <RememberCheckbox id="remember-login" type="checkbox" />
          <RememberLabel htmlFor="remember-login">로그인 상태 유지</RememberLabel>
        </RememberRow>
      </AuthForm>
      <AuthSwitchLink
        label="StudyPlanner가 처음이신가요?"
        actionLabel="회원가입"
        onClick={onMoveToSignup}
      />
    </AuthLayout>
  );
};

export default LoginPage;

const PasswordHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: -12px;
`;

const PasswordLabel = styled.label`
  color: #191c1d;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 600;
`;

const FindPasswordButton = styled.button`
  border: 0;
  background: transparent;
  color: #006a6a;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const RememberRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: -4px;
`;

const RememberCheckbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #006a6a;
  cursor: pointer;
`;

const RememberLabel = styled.label`
  color: #44474e;
  font-size: 15px;
  cursor: pointer;
`;
