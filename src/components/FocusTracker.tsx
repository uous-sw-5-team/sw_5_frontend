import React from 'react';
import styled from 'styled-components';

interface FocusTrackerProps {
  percentage?: number;
}

const FocusTracker = ({ percentage = 0 }: FocusTrackerProps) => {
  return (
    <Container>
      <TopRow>
        <TitleGroup>
          <Icon>⚡</Icon>
          <Title>오늘의 집중도</Title>
        </TitleGroup>
        <Percentage>{percentage}%</Percentage>
      </TopRow>
      <ProgressBarBg>
        <ProgressBarFill width={percentage} />
      </ProgressBarBg>
      <GuideText>목표를 향해 달려볼까요?</GuideText>
    </Container>
  );
};

export default FocusTracker;

const Container = styled.div`
  background-color: #1a1a2e;
  border-radius: 20px;
  padding: 24px 28px;
  margin-top: 20px;
  color: #ffffff;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.span`
  font-size: 18px;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;

const Percentage = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
`;

const ProgressBarBg = styled.div`
  width: 100%;
  height: 8px;
  background-color: #2e2e4a;
  border-radius: 100px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: #f97316;
  border-radius: 100px;
  transition: width 0.3s ease;
`;

const GuideText = styled.p`
  font-size: 14px;
  color: #9999bb;
  margin: 0;
`;