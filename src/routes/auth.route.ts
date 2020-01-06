import { loginController, createNewUserController } from "../controllers/user.controller";
import basicResponse  from "../models/response.model";
import { validations } from "../validations/user.validation";

const routes = [
  {
    method: "POST",
    path: "/users/login",
    config: {
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
    config: {
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