import { createTodo, listTodo, deleteTodo } from "../services/todo.service";
import { Lifecycle } from "@hapi/hapi";

const todoCreateController: Lifecycle.Method = async (request, h) => {
  return await createTodo(request.payload as string);
};

const todoListController: Lifecycle.Method = async (request, h) => {
  return await listTodo();
};

const todoDeleteController: Lifecycle.Method = async (request, h) => {
  const { id } = request.params;
  return await deleteTodo(id);
};

export { todoCreateController, todoListController, todoDeleteController };
