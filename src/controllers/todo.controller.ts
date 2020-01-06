import { createTodo, listTodo, deleteTodo } from '../services/todo.service';

const todoCreateController = async (request: any, h: any) => {
  return await createTodo(request.payload);
}

const todoListController = async (request: any, h: any) => {
  return await listTodo();
}

const todoDeleteController = async (request: any, h: any) => {
  const { id } = request.params;
  return await deleteTodo(id);
}

export default { todoCreateController, todoListController, todoDeleteController };
