import React from "react";
import styled from "styled-components";
import { CheckCircle2, Clock3, Target } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const AuthLayout = ({ title, subtitle, children }: AuthLayoutProps) => {
  return (
    <PageShell>
      <BrandPanel>
        <BrandMark>SP</BrandMark>
        <BrandTitle>Study Planner</BrandTitle>
        <BrandCopy>
          오늘의 계획을 정리하고 집중 시간을 차곡차곡 쌓아보세요.
        </BrandCopy>
        <PreviewList aria-label="Study Planner preview">
          <PreviewItem>
            <CheckCircle2 size={18} />
            <span>국어 문학 기출 분석</span>
          </PreviewItem>
          <PreviewItem>
            <Clock3 size={18} />
            <span>오후 3:00 과학 복습</span>
          </PreviewItem>
          <PreviewItem>
            <Target size={18} />
            <span>오늘 집중률 72%</span>
          </PreviewItem>
        </PreviewList>
      </BrandPanel>

      <FormPanel>
        <FormHeader>
          <FormTitle>{title}</FormTitle>
          <FormSubtitle>{subtitle}</FormSubtitle>
        </FormHeader>
        {children}
      </FormPanel>
    </PageShell>
  );
};

export default AuthLayout;

const PageShell = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(360px, 1fr);
  background: #f6f8fb;
  padding: 40px;
  gap: 32px;
  box-sizing: border-box;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`;

const BrandPanel = styled.section`
  border-radius: 8px;
  background: #102033;
  color: #ffffff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 520px;
  box-sizing: border-box;

  @media (max-width: 860px) {
    min-height: auto;
    padding: 28px;
  }
`;

const BrandMark = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2fd08f;
  color: #102033;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 28px;
`;

const BrandTitle = styled.h1`
  font-size: 36px;
  line-height: 1.15;
  margin: 0 0 14px;
  font-weight: 900;
`;

const BrandCopy = styled.p`
  color: #c9d5e2;
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 36px;
  max-width: 420px;
`;

const PreviewList = styled.div`
  display: grid;
  gap: 12px;
  max-width: 420px;
`;

const PreviewItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;
  padding: 0 16px;
  color: #eef5fb;
  background: rgba(255, 255, 255, 0.06);
  box-sizing: border-box;

  svg {
    color: #ffb657;
    flex-shrink: 0;
  }
`;

const FormPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 440px;
  margin: 0 auto;
`;

const FormHeader = styled.div`
  margin-bottom: 28px;
`;

const FormTitle = styled.h2`
  color: #172033;
  font-size: 30px;
  line-height: 1.2;
  margin: 0 0 8px;
  font-weight: 900;
`;

const FormSubtitle = styled.p`
  color: #667085;
  font-size: 15px;
  line-height: 1.55;
  margin: 0;
`;
