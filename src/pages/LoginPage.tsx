import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthLayout from "../components/auth/AuthLayout";
import AuthSwitchLink from "../components/auth/AuthSwitchLink";
import TextField from "../components/auth/TextField";
import { login, saveAuthSession } from "../features/auth/authApi";

interface LoginPageProps {
  onMoveToSignup: () => void;
  onLoginSuccess: () => void;
}

const LoginPage = ({ onMoveToSignup, onLoginSuccess }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <AuthLayout
      title="환영합니다."
      subtitle=""
      pageSubtitle="당신의 성공을 설계하세요"
    >
      <AuthForm
        submitLabel={isSubmitting ? "로그인 중..." : "로그인"}
        onSubmit={async (event) => {
          event.preventDefault();
          setErrorMessage("");

          if (!email.trim() || !password.trim()) {
            setErrorMessage("이메일과 비밀번호를 입력해주세요.");
            return;
          }

          try {
            setIsSubmitting(true);
            const authSession = await login({
              email: email.trim(),
              password,
            });
            saveAuthSession(authSession);
            onLoginSuccess();
          } catch (error) {
            setErrorMessage(
              error instanceof Error ? error.message : "로그인에 실패했습니다.",
            );
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <TextField
          id="login-email"
          label="이메일"
          type="email"
          autoComplete="email"
          icon={<Mail size={20} />}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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

const ErrorMessage = styled.p`
  color: #ba1a1a;
  font-size: 13px;
  line-height: 1.4;
  margin: -8px 0 0;
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
