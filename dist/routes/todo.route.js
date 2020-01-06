"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_controller_1 = require("../controllers/todo.controller");
const response_model_1 = __importDefault(require("../models/response.model"));
const todo_validation_1 = require("../validations/todo.validation");
const todoRoute = [
    {
        method: "GET",
        path: "/todo",
        config: {
            tags: ["api"],
            description: "Get records in Todo",
            plugins: {
                "hapi-swagger": {
                    responses: response_model_1.default
                }
            }
        },
        handler: todo_controller_1.todoListController
    },
    {
        method: "POST",
        path: "/todo",
        config: {
            tags: ["api"],
            description: "Create new record in Todo",
            validate: todo_validation_1.validations.name,
            plugins: {
                "hapi-swagger": {
                    payloadType: "form",
                    responses: response_model_1.default
                }
            }
        },
        handler: todo_controller_1.todoCreateController
    },
    {
        method: "DELETE",
        path: "/todo/{id}",
        config: {
            tags: ["api"],
            description: "Delete record by id in Todo",
            validate: todo_validation_1.deleteValidation.id,
            plugins: {
                "hapi-swagger": {
                    responses: response_model_1.default
                }
            }
        },
        handler: todo_controller_1.todoDeleteController
    }
];
exports.default = todoRoute;
//# sourceMappingURL=todo.route.js.map