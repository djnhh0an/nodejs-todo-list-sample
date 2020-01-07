import { createTodo } from "../todo.service";

import { create } from "../../repositories/todo.repository";

jest.mock("../../repositories/todo.repository");

describe("", () => {
  test("create todo", async () => {

    // Arrange
    const name = "todo name";
    const expectedTodo = {
      name, createdAt: Date.now(), updatedAt: Date.now()
    };

    //@ts-ignore
    create.mockReturnValue(expectedTodo);
    
    // Act
    const result = await createTodo(name);

    // Assert
    expect(result.name).toBe(name);
    expect(result.createdAt).toBeDefined();
    expect(result.updatedAt).toBeDefined();

    expect(create).toBeCalled();

  });
});
