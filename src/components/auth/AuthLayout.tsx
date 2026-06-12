import React from "react";
import styled from "styled-components";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  pageSubtitle: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, subtitle, pageSubtitle, children }: AuthLayoutProps) => {
  return (
    <PageShell>
      <HeroHeader>
        <BrandTitle>Study Planner</BrandTitle>
        <BrandSubtitle>{pageSubtitle}</BrandSubtitle>
      </HeroHeader>

      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        </CardHeader>
        {children}
      </Card>
    </PageShell>
  );
};

export default AuthLayout;

const PageShell = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
  box-sizing: border-box;
  color: #191c1d;
  background-color: #f8f9fa;
  background-image: radial-gradient(#d1d5db 0.6px, transparent 0.6px);
  background-size: 24px 24px;

  @media (max-width: 640px) {
    justify-content: flex-start;
    padding: 32px 16px;
  }
`;

const HeroHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
`;

const BrandTitle = styled.h1`
  color: #031635;
  font-size: 40px;
  line-height: 1.15;
  font-weight: 800;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 32px;
  }
`;

const BrandSubtitle = styled.p`
  color: #44474e;
  font-size: 17px;
  line-height: 1.5;
  margin: 14px 0 0;
`;

const Card = styled.section`
  width: 100%;
  max-width: 440px;
  background: #ffffff;
  border: 1px solid #c5c6cf;
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: 0 4px 24px rgba(3, 22, 53, 0.06);

  @media (max-width: 640px) {
    padding: 28px 24px;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 28px;
`;

const CardTitle = styled.h2`
  color: #191c1d;
  font-size: 24px;
  line-height: 1.35;
  font-weight: 700;
  margin: 0;
`;

const CardSubtitle = styled.p`
  color: #44474e;
  font-size: 15px;
  line-height: 1.5;
  margin: 8px 0 0;
`;
