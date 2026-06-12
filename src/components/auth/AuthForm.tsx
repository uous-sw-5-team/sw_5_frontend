import React from "react";
import styled from "styled-components";

interface AuthFormProps {
  children: React.ReactNode;
  submitLabel: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ children, submitLabel, onSubmit }: AuthFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Fields>{children}</Fields>
      <SubmitButton type="submit">{submitLabel}</SubmitButton>
    </Form>
  );
};

export default AuthForm;

const Form = styled.form`
  display: grid;
  gap: 22px;
`;

const Fields = styled.div`
  display: grid;
  gap: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  min-height: 48px;
  border: 0;
  border-radius: 8px;
  background: #102033;
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #203a57;
  }

  &:active {
    transform: translateY(1px);
  }
`;
