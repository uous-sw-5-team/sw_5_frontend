import { request } from "../../shared/lib/request";
import { PlanResponse } from "../filter-todos/filterApi";

export function uploadPhoto(planId: string, file: File) {
  const fd = new FormData();
  fd.append("photo", file);
  return request<PlanResponse>(`/plans/${planId}/photos`, { method: "POST", body: fd });
}

export function getPhotoUrl(filename: string) {
  return `/api/photos/${filename}`;
}
