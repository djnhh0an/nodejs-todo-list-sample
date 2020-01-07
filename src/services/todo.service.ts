import { create, list, deleteById } from "../repositories/todo.repository";

export const createTodo = async (name: string) => {
  try {
    const Todo = await create({
      name
    });

    return Todo;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const listTodo = async () => {
  return await list();
};

export const deleteTodo = async (id: string) => {
  return await deleteById(id);
};

