import AuthForm from "../components/auth/AuthForm";
import AuthLayout from "../components/auth/AuthLayout";
import AuthSwitchLink from "../components/auth/AuthSwitchLink";
import TextField from "../components/auth/TextField";

interface LoginPageProps {
  onMoveToSignup: () => void;
  onLoginSuccess: () => void;
}

const LoginPage = ({ onMoveToSignup, onLoginSuccess }: LoginPageProps) => {
  return (
    <AuthLayout
      title="로그인"
      subtitle="계획과 집중 기록을 이어서 관리해요."
    >
      <AuthForm
        submitLabel="로그인"
        onSubmit={(event) => {
          event.preventDefault();
          onLoginSuccess();
        }}
      >
        <TextField
          id="login-email"
          label="이메일"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
        />
        <TextField
          id="login-password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요"
          autoComplete="current-password"
        />
      </AuthForm>
      <AuthSwitchLink
        label="아직 계정이 없나요?"
        actionLabel="회원가입"
        onClick={onMoveToSignup}
      />
    </AuthLayout>
  );
};

export default LoginPage;
