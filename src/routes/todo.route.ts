import {
  todoCreateController,
  todoListController,
  todoDeleteController
} from "../controllers/todo.controller";

import basicResponse from "./response.model";
import {
  validations,
  deleteValidation,
  todoObjectValidation
} from "../validations/todo.validation";
import { ServerRoute } from "@hapi/hapi";

const todoRoute: ServerRoute[] = [
  {
    method: "GET",
    path: "/todo",
    options: {
      tags: ["api"],
      description: "Get records in Todo",
      plugins: {
        "hapi-swagger": {
          responses: basicResponse
        }
      }
    },
    handler: todoListController
  },
  {
    method: "POST",
    path: "/todo",
    options: {
      tags: ["api"],
      description: "Create new record in Todo",
      validate: validations.name,
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
          responses: basicResponse
        }
      },
      response: {
        schema: todoObjectValidation
      }
    },
    handler: todoCreateController
  },
  {
    method: "DELETE",
    path: "/todo/{id}",
    options: {
      tags: ["api"],
      description: "Delete record by id in Todo",
      validate: deleteValidation.id,
      plugins: {
        "hapi-swagger": {
          responses: basicResponse
        }
      }
    },
    handler: todoDeleteController
  }
];

export default todoRoute;
