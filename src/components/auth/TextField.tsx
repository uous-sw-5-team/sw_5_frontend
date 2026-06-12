import styled from "styled-components";

interface TextFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  autoComplete?: string;
}

const TextField = ({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
}: TextFieldProps) => {
  return (
    <FieldGroup>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} />
    </FieldGroup>
  );
};

export default TextField;

const FieldGroup = styled.div`
  display: grid;
  gap: 8px;
`;

const Label = styled.label`
  color: #263445;
  font-size: 14px;
  font-weight: 800;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #d8dee7;
  border-radius: 8px;
  background: #ffffff;
  color: #172033;
  font-size: 15px;
  padding: 0 14px;
  box-sizing: border-box;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #98a2b3;
  }

  &:focus {
    border-color: #2fd08f;
    box-shadow: 0 0 0 3px rgba(47, 208, 143, 0.18);
  }
`;
