import { createTodo, listTodo, deleteTodo } from "../todo.service";
import { Todo } from "../../models/todo.model";

import * as todoRepository from "../../repositories/todo.repository";
jest.mock("../../repositories/todo.repository");

describe("todo service", () => {
  test("create todo", async () => {

    // Arrange
    const name = "todo name";
    const expectedTodo: Todo = {
      name, createdAt: new Date(), updatedAt: new Date()
    };

    const mockedTodoRepository = todoRepository as jest.Mocked<typeof todoRepository>;
    mockedTodoRepository.create.mockReturnValue(expectedTodo);
    
    // Act
    const result = await createTodo(name);

    // Assert
    expect(todoRepository.create).toBeCalled();

    expect(result.name).toBe(name);
    expect(result.createdAt).toBeDefined();
    expect(result.updatedAt).toBeDefined();
    expect(Object.keys(result).length).toBe(3); 
  });

  test("create todo, throw error", async () => {

    // Arrange
    const name = "todo name";

    const mockedTodoRepository = todoRepository as jest.Mocked<typeof todoRepository>;
    mockedTodoRepository.create.mockImplementation(() => {
      throw new Error("test");
    });
    
    // Act && Assert
    await expect(createTodo(name)).rejects.toEqual(new Error("test"));
  });

  test("list todo", async () => {

    // Arrange
    const name = "todo name";
    const expectedTodos: Todo[] = [{
      name, createdAt: new Date(), updatedAt: new Date()
    }];

    const mockedTodoRepository = todoRepository as jest.Mocked<typeof todoRepository>;
    mockedTodoRepository.list.mockReturnValue(expectedTodos);
    
    // Act
    const result = await listTodo();

    // Assert
    expect(todoRepository.list).toBeCalled();

    expect(result.length).toBe(1);
    expect(result[0].name).toBe(name);
    expect(result[0].createdAt).toBeDefined();
    expect(result[0].updatedAt).toBeDefined();
    expect(Object.keys(result[0]).length).toBe(3); 
  });

  test("delete todo", async () => {

    // Arrange
    const name = "todo name";
    const expectedTodo: Todo = {
      name, createdAt: new Date(), updatedAt: new Date()
    };

    const mockedTodoRepository = todoRepository as jest.Mocked<typeof todoRepository>;
    mockedTodoRepository.deleteById.mockReturnValue(expectedTodo);
    
    // Act
    await deleteTodo(name);

    // Assert
    expect(todoRepository.deleteById).toBeCalled();
  });

});
