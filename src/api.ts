const BASE = "http://localhost:8080/api";

function getToken(): string | null {
  return localStorage.getItem("token");
}

async function request<T>(
  path: string,
  options: { method?: string; body?: unknown; auth?: boolean } = {}
): Promise<T> {
  const { method = "GET", body, auth = true } = options;
  const headers: Record<string, string> = {};

  if (body && !(body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  if (auth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body:
      body instanceof FormData
        ? body
        : body
        ? JSON.stringify(body)
        : undefined,
  });

  if (res.status === 401) {
    localStorage.removeItem("token");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok)
    throw new Error(
      (data as { error?: string }).error || `요청 실패 (${res.status})`
    );
  return data as T;
}

export interface PlanResponse {
  id: string;
  user_id: string;
  date: string;
  title: string;
  description: string | null;
  time: string | null;
  completed: boolean;
  photos: string[];
  created_at: string;
  updated_at: string;
}

export const api = {
  listPlans: (params: { date?: string; month?: string } = {}) => {
    const qs = new URLSearchParams(
      Object.fromEntries(
        Object.entries(params).filter(([, v]) => v !== undefined)
      ) as Record<string, string>
    ).toString();
    return request<PlanResponse[]>(`/plans${qs ? `?${qs}` : ""}`);
  },
  updatePlan: (
    id: string,
    payload: { title?: string; description?: string; time?: string; completed?: boolean }
  ) => request<PlanResponse>(`/plans/${id}`, { method: "PUT", body: payload }),
  deletePlan: (id: string) =>
    request<{ message: string }>(`/plans/${id}`, { method: "DELETE" }),
  createPlan: (payload: {
    date: string;
    title: string;
    description?: string;
    time?: string;
  }) => request<PlanResponse>("/plans", { method: "POST", body: payload }),
  uploadPhoto: (planId: string, file: File) => {
    const fd = new FormData();
    fd.append("photo", file);
    return request<PlanResponse>(`/plans/${planId}/photos`, { method: "POST", body: fd });
  },
  photoUrl: (filename: string) => `${BASE}/photos/${filename}`,
};