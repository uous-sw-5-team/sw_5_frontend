import { updatePlan } from "../edit-todo/editApi";

export function togglePlan(id: string, completed: boolean) {
  return updatePlan(id, { completed });
}
