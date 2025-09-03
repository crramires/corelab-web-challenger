import api from "./api"
import { Todo } from "../types/Todo";

export async function getTodos(): Promise<Todo[]> {
    const res = await api.get("/todos");
    return res.data;
}

export async function createTodo(todo: Partial<Todo>): Promise<Todo> {
    const res = await api.post("/todos", todo);
    return res.data;
}


export async function updateTodo(id: number, todo: Partial<Todo>): Promise<Todo> {
  const res = await api.put(`/todos/${id}`, todo);
  return res.data;
}

export async function deleteTodo(id: number): Promise<void> {
  await api.delete(`/todos/${id}`);
}

export async function toggleFavorite(id: number): Promise<Todo> {
  const res = await api.patch(`/todos/${id}/favorite`);
  return res.data;
}