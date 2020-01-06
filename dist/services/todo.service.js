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
const todo_model_1 = require("../models/todo.model");
exports.createTodo = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Todo = yield todo_model_1.create({
            name
        });
        return Todo;
    }
    catch (err) {
        console.error(err);
        throw err;
    }
});
exports.listTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.list();
});
exports.deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield todo_model_1.deleteById(id);
});
//# sourceMappingURL=todo.service.js.map