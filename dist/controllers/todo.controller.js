"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = require("../services/todo.service");
const todoCreateController = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_service_1.createTodo(request.payload);
});
exports.todoCreateController = todoCreateController;
const todoListController = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_service_1.listTodo();
});
exports.todoListController = todoListController;
const todoDeleteController = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    return yield todo_service_1.deleteTodo(id);
});
exports.todoDeleteController = todoDeleteController;
//# sourceMappingURL=todo.controller.js.map