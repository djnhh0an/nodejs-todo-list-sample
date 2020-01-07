import { loginController, createNewUserController } from "../controllers/user.controller";
import basicResponse  from "./response.model";
import { validations } from "../validations/user.validation";
import { ServerRoute } from "@hapi/hapi";

const routes: ServerRoute[] = [
  {
    method: "POST",
    path: "/users/login",
    options: {
      tags: ["api"],
      description: "login",
      validate: validations.user,
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
          responses: basicResponse
        }
      }
    },
    handler: loginController
  },
  {
    method: "POST",
    path: "/users",
    options: {
      tags: ["api"],
      description: "create a new user",
      validate: validations.user,
      plugins: {
        "hapi-swagger": {
          payloadType: "form",
          responses: basicResponse
        }
      }
    },
    handler: createNewUserController
  }
];

export default routes;