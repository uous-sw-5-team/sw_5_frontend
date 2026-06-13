import { request } from "../../shared/lib/request";
import { PlanResponse } from "../filter-todos/filterApi";

export interface CreatePlanPayload {
  date: string;
  title: string;
  description?: string;
  time?: string;
}

export function createPlan(payload: CreatePlanPayload) {
  return request<PlanResponse>("/plans", { method: "POST", body: payload });
}
