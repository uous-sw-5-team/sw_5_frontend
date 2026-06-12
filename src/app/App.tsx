import React, { useState } from "react";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";

type AppView = "login" | "signup" | "main";

export const App: React.FC = () => {
  const [view, setView] = useState<AppView>("login");

  if (view === "signup") {
    return (
      <SignupPage
        onMoveToLogin={() => setView("login")}
        onSignupSuccess={() => setView("main")}
      />
    );
  }

  if (view === "main") {
    return (
      <MainPage
        onMoveToLogin={() => setView("login")}
        onMoveToSignup={() => setView("signup")}
      />
    );
  }

  return (
    <LoginPage
      onMoveToSignup={() => setView("signup")}
      onLoginSuccess={() => setView("main")}
    />
  );
};
