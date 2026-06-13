import { request } from "../../shared/lib/request";

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

export function fetchPlans(params: { date?: string; month?: string } = {}) {
  const qs = new URLSearchParams(
    Object.fromEntries(
      Object.entries(params).filter(([, v]) => v !== undefined)
    ) as Record<string, string>
  ).toString();
  return request<PlanResponse[]>(`/plans${qs ? `?${qs}` : ""}`);
}
