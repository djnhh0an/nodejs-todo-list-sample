import { createTodo, listTodo, deleteTodo } from "../services/todo.service";
import { Lifecycle } from "@hapi/hapi";

type createPayload = { name: string };
const todoCreateController: Lifecycle.Method = async (request, h) => {
  const payload = request.payload as createPayload;
  return await createTodo(payload.name);
};

const todoListController: Lifecycle.Method = async (request, h) => {
  return await listTodo();
};

const todoDeleteController: Lifecycle.Method = async (request, h) => {
  const { id } = request.params;
  return await deleteTodo(id);
};

export { todoCreateController, todoListController, todoDeleteController };
