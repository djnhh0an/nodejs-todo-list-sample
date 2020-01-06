"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_model_1 = require("../models/todo.model");
exports.createTodo = async (name) => {
    try {
        const Todo = await todo_model_1.create({
            name
        });
        return Todo;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};
exports.listTodo = async () => {
    return await todo_model_1.list();
};
exports.deleteTodo = async (id) => {
    return await todo_model_1.deleteById(id);
};
//# sourceMappingURL=todo.service.js.map