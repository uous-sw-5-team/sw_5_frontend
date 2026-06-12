import styled from "styled-components";

interface AuthSwitchLinkProps {
  label: string;
  actionLabel: string;
  onClick: () => void;
}

const AuthSwitchLink = ({ label, actionLabel, onClick }: AuthSwitchLinkProps) => {
  return (
    <SwitchText>
      {label}
      <SwitchButton type="button" onClick={onClick}>
        {actionLabel}
      </SwitchButton>
    </SwitchText>
  );
};

export default AuthSwitchLink;

const SwitchText = styled.p`
  color: #667085;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  margin: 24px 0 0;
`;

const SwitchButton = styled.button`
  border: 0;
  background: transparent;
  color: #0b7f56;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  padding: 0 0 0 6px;

  &:hover {
    text-decoration: underline;
  }
`;
