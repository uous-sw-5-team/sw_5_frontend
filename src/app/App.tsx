import React from "react";
import MainPage from "../pages/MainPage"; // 방금 만든 메인 레이아웃 페이지 가져오기

export const App: React.FC = () => {
  return (
    <>
      {/* 화면에 메인 레이아웃을 렌더링합니다 */}
      <MainPage />
    </>
  );
};