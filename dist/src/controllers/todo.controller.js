"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = require("../services/todo.service");
const todoCreateController = async (request, h) => {
    return await todo_service_1.createTodo(request.payload);
};
exports.todoCreateController = todoCreateController;
const todoListController = async (request, h) => {
    return await todo_service_1.listTodo();
};
exports.todoListController = todoListController;
const todoDeleteController = async (request, h) => {
    const { id } = request.params;
    return await todo_service_1.deleteTodo(id);
};
exports.todoDeleteController = todoDeleteController;
//# sourceMappingURL=todo.controller.js.map