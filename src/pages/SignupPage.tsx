import { ArrowRight, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthLayout from "../components/auth/AuthLayout";
import AuthSwitchLink from "../components/auth/AuthSwitchLink";
import TextField from "../components/auth/TextField";
import { register, saveAuthSession } from "../features/auth/authApi";

interface SignupPageProps {
  onMoveToLogin: () => void;
  onSignupSuccess: () => void;
}

const SignupPage = ({ onMoveToLogin, onSignupSuccess }: SignupPageProps) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <AuthLayout
      title="계정 생성"
      subtitle="집중하는 학습자들의 커뮤니티에 합류하세요"
      pageSubtitle="학업의 원동력을 높이는 차분한 학습 공간"
    >
      <AuthForm
        submitLabel={isSubmitting ? "가입 중..." : "계정 만들기"}
        submitIcon={<ArrowRight size={20} />}
        onSubmit={async (event) => {
          event.preventDefault();
          setErrorMessage("");

          if (!username.trim() || !email.trim() || !password.trim()) {
            setErrorMessage("이름, 이메일, 비밀번호를 모두 입력해주세요.");
            return;
          }

          if (password !== passwordConfirm) {
            setErrorMessage("비밀번호가 일치하지 않습니다.");
            return;
          }

          try {
            setIsSubmitting(true);
            const authSession = await register({
              username: username.trim(),
              email: email.trim(),
              password,
            });
            saveAuthSession(authSession);
            onSignupSuccess();
          } catch (error) {
            setErrorMessage(
              error instanceof Error ? error.message : "회원가입에 실패했습니다.",
            );
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <TextField
          id="signup-username"
          label="이름"
          autoComplete="username"
          icon={<User size={20} />}
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          id="signup-email"
          label="이메일"
          type="email"
          autoComplete="email"
          icon={<Mail size={20} />}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="signup-password"
          label="비밀번호"
          type="password"
          autoComplete="new-password"
          icon={<Lock size={20} />}
          helperText="영문과 숫자를 포함하여 8자 이상이어야 합니다."
          canToggleVisibility
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <TextField
          id="signup-password-confirm"
          label="비밀번호 확인"
          type="password"
          autoComplete="new-password"
          icon={<Lock size={20} />}
          canToggleVisibility
          required
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </AuthForm>
      <AuthSwitchLink
        label="이미 계정이 있으신가요?"
        actionLabel="로그인"
        onClick={onMoveToLogin}
      />
      <PolicyText>
        계정을 생성함으로써 이용약관 및 개인정보처리방침에 동의하게 됩니다.
      </PolicyText>
    </AuthLayout>
  );
};

export default SignupPage;

const ErrorMessage = styled.p`
  color: #ba1a1a;
  font-size: 13px;
  line-height: 1.4;
  margin: -8px 0 0;
`;

const PolicyText = styled.p`
  color: #75777f;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  margin: 28px 4px 0;
`;
