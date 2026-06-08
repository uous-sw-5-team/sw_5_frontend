export type TodoPriority = "low" | "medium" | "high";

export type TodoStatus = "todo" | "in-progress" | "done";

export interface Todo {
  id: string;
  title: string;
  dueDate: string | null;
  priority: TodoPriority;
  categoryId: string | null;
  status: TodoStatus;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
