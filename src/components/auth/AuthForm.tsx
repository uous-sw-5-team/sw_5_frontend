import React from "react";
import styled from "styled-components";

interface AuthFormProps {
  children: React.ReactNode;
  submitLabel: string;
  submitIcon?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({ children, submitLabel, submitIcon, onSubmit }: AuthFormProps) => {
  return (
    <Form onSubmit={onSubmit}>
      <Fields>{children}</Fields>
      <SubmitButton type="submit">
        <span>{submitLabel}</span>
        {submitIcon}
      </SubmitButton>
    </Form>
  );
};

export default AuthForm;

const Form = styled.form`
  display: grid;
  gap: 24px;
`;

const Fields = styled.div`
  display: grid;
  gap: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  min-height: 56px;
  border: 0;
  border-radius: 8px;
  background: #031635;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 6px 16px rgba(3, 22, 53, 0.18);
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #0d2a5a;
    box-shadow: 0 8px 20px rgba(3, 22, 53, 0.22);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;
