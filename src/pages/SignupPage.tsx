import { ArrowRight, Badge, Lock, User } from "lucide-react";
import styled from "styled-components";
import AuthForm from "../components/auth/AuthForm";
import AuthLayout from "../components/auth/AuthLayout";
import AuthSwitchLink from "../components/auth/AuthSwitchLink";
import TextField from "../components/auth/TextField";

interface SignupPageProps {
  onMoveToLogin: () => void;
  onSignupSuccess: () => void;
}

const SignupPage = ({ onMoveToLogin, onSignupSuccess }: SignupPageProps) => {
  return (
    <AuthLayout
      title="계정 생성"
      subtitle="집중하는 학습자들의 커뮤니티에 합류하세요"
      pageSubtitle="학업의 원동력을 높이는 차분한 학습 공간"
    >
      <AuthForm
        submitLabel="계정 만들기"
        submitIcon={<ArrowRight size={20} />}
        onSubmit={(event) => {
          event.preventDefault();
          onSignupSuccess();
        }}
      >
        <TextField
          id="signup-name"
          label="성함"
          placeholder="성함을 입력하세요"
          autoComplete="name"
          icon={<User size={20} />}
        />
        <TextField
          id="signup-username"
          label="아이디"
          placeholder="아이디를 입력하세요"
          autoComplete="username"
          icon={<Badge size={20} />}
        />
        <TextField
          id="signup-password"
          label="비밀번호"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          icon={<Lock size={20} />}
          helperText="영문과 숫자를 포함하여 8자 이상이어야 합니다."
          canToggleVisibility
        />
        <TextField
          id="signup-password-confirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력하세요"
          autoComplete="new-password"
          icon={<Lock size={20} />}
          canToggleVisibility
        />
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

const PolicyText = styled.p`
  color: #75777f;
  font-size: 13px;
  line-height: 1.6;
  text-align: center;
  margin: 28px 4px 0;
`;
