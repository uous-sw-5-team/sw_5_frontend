import styled from "styled-components";

interface AuthSwitchLinkProps {
  label: string;
  actionLabel: string;
  onClick: () => void;
}

const AuthSwitchLink = ({ label, actionLabel, onClick }: AuthSwitchLinkProps) => {
  return (
    <SwitchSection>
      <SwitchText>
        {label}
        <SwitchButton type="button" onClick={onClick}>
          {actionLabel}
        </SwitchButton>
      </SwitchText>
    </SwitchSection>
  );
};

export default AuthSwitchLink;

const SwitchSection = styled.div`
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid rgba(197, 198, 207, 0.7);
  text-align: center;
`;

const SwitchText = styled.p`
  color: #44474e;
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
`;

const SwitchButton = styled.button`
  border: 0;
  background: transparent;
  color: #006a6a;
  font: inherit;
  font-weight: 700;
  cursor: pointer;
  padding: 0 0 0 8px;

  &:hover {
    text-decoration: underline;
  }
`;
