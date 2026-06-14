import { request } from "../../shared/lib/request";

export function deletePlan(id: string) {
  return request<void>(`/plans/${id}`, { method: "DELETE" });
}
