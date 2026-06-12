import React, { useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";

interface TextFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  autoComplete?: string;
  icon?: React.ReactNode;
  helperText?: string;
  canToggleVisibility?: boolean;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  icon,
  helperText,
  canToggleVisibility = false,
  required = false,
  value,
  onChange,
}: TextFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const inputType = canToggleVisibility && type === "password" && isVisible ? "text" : type;

  return (
    <FieldGroup>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputShell>
        {icon && <IconSlot>{icon}</IconSlot>}
        <Input
          id={id}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          value={value}
          onChange={onChange}
          $hasIcon={Boolean(icon)}
          $hasAction={canToggleVisibility}
        />
        {canToggleVisibility && type === "password" && (
          <VisibilityButton
            type="button"
            aria-label={isVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
            onClick={() => setIsVisible((current) => !current)}
          >
            {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </VisibilityButton>
        )}
      </InputShell>
      {helperText && <HelperText>{helperText}</HelperText>}
    </FieldGroup>
  );
};

export default TextField;

const FieldGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  color: #191c1d;
  font-size: 15px;
  line-height: 1.4;
  font-weight: 600;
`;

const InputShell = styled.div`
  position: relative;
`;

const IconSlot = styled.span`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #75777f;
  display: inline-flex;
  pointer-events: none;
`;

const Input = styled.input<{ $hasIcon: boolean; $hasAction: boolean }>`
  width: 100%;
  height: 54px;
  border: 1px solid #c5c6cf;
  border-radius: 8px;
  background: #ffffff;
  color: #191c1d;
  font-size: 16px;
  padding: ${({ $hasIcon, $hasAction }) =>
    `0 ${$hasAction ? "46px" : "16px"} 0 ${$hasIcon ? "44px" : "16px"}`};
  box-sizing: border-box;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    border-color: #081b3a;
    box-shadow: 0 0 0 3px rgba(8, 27, 58, 0.1);
  }
`;

const VisibilityButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: #75777f;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #191c1d;
  }
`;

const HelperText = styled.p`
  color: #6b7280;
  font-size: 12px;
  line-height: 1.4;
  margin: 0 0 0 4px;
`;
