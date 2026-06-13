import React, { useEffect, useState } from "react";
import { clearAuthSession, getMe, getSavedToken } from "../features/auth/authApi";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import SignupPage from "../pages/SignupPage";

type AppView = "login" | "signup" | "main";

export const App: React.FC = () => {
  const [view, setView] = useState<AppView>("main");
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(getSavedToken()));

  useEffect(() => {
    const token = getSavedToken();

    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    getMe(token)
      .then(() => setIsAuthenticated(true))
      .catch(() => {
        clearAuthSession();
        setIsAuthenticated(false);
      });
  }, []);

  if (view === "signup") {
    return (
      <SignupPage
        onMoveToLogin={() => setView("login")}
        onSignupSuccess={() => {
          setIsAuthenticated(true);
          setView("main");
        }}
      />
    );
  }

  if (view === "main") {
    return (
      <MainPage
        isAuthenticated={isAuthenticated}
        onMoveToLogin={() => setView("login")}
        onMoveToSignup={() => setView("signup")}
      />
    );
  }

  return (
    <LoginPage
      onMoveToSignup={() => setView("signup")}
      onLoginSuccess={() => {
        setIsAuthenticated(true);
        setView("main");
      }}
    />
  );
};
