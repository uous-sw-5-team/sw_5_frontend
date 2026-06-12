import AuthForm from "../components/auth/AuthForm";
import AuthLayout from "../components/auth/AuthLayout";
import TextField from "../components/auth/TextField";

interface SignupPageProps {
  onSignupSuccess: () => void;
}

const SignupPage = ({ onSignupSuccess }: SignupPageProps) => {
  return (
    <AuthLayout
      title="회원가입"
      subtitle="새 계정으로 나만의 학습 루틴을 시작해요."
    >
      <AuthForm
        submitLabel="회원가입"
        onSubmit={(event) => {
          event.preventDefault();
          onSignupSuccess();
        }}
      >
        <TextField
          id="signup-name"
          label="이름"
          placeholder="홍길동"
          autoComplete="name"
        />
        <TextField
          id="signup-email"
          label="이메일"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
        />
        <TextField
          id="signup-password"
          label="비밀번호"
          type="password"
          placeholder="8자 이상 입력하세요"
          autoComplete="new-password"
        />
        <TextField
          id="signup-password-confirm"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          autoComplete="new-password"
        />
      </AuthForm>
    </AuthLayout>
  );
};

export default SignupPage;
