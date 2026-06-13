export interface AuthUser {
  email: string;
  id: string;
  username: string;
}

export interface AuthResponse {
  token: string;
  user: AuthUser;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest extends LoginRequest {
  username: string;
}

const AUTH_TOKEN_KEY = "studyPlanner.authToken";
const AUTH_USER_KEY = "studyPlanner.authUser";

const requestJson = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
  const response = await fetch(path, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message =
      typeof errorBody?.error === "string" ? errorBody.error : "요청을 처리하지 못했습니다.";
    throw new Error(message);
  }

  return response.json() as Promise<T>;
};

export const login = (body: LoginRequest) => {
  return requestJson<AuthResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const register = (body: RegisterRequest) => {
  return requestJson<AuthResponse>("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(body),
  });
};

export const getMe = (token: string) => {
  return requestJson<AuthUser>("/api/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const saveAuthSession = ({ token, user }: AuthResponse) => {
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
};

export const getSavedToken = () => {
  return localStorage.getItem(AUTH_TOKEN_KEY);
};

export const clearAuthSession = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_KEY);
};
