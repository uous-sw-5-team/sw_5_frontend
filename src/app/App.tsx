import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

export const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (isLoggedIn) {
    return <MainPage />;
  }

  return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
};
