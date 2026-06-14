import { request } from "../../shared/lib/request";
import { PlanResponse } from "../filter-todos/filterApi";

export interface UpdatePlanPayload {
  title?: string;
  description?: string;
  time?: string;
  completed?: boolean;
}

export function updatePlan(id: string, payload: UpdatePlanPayload) {
  return request<PlanResponse>(`/plans/${id}`, { method: "PUT", body: payload });
}
