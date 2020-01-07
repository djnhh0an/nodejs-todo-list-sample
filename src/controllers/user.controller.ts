import { login, createNewUser } from "../services/user.service";
import { Lifecycle } from "@hapi/hapi";

const loginController: Lifecycle.Method = (request, h) => {
    return login(request.payload, h);
};

const createNewUserController: Lifecycle.Method = (request, h) => {
    return createNewUser(request.payload, h);
};

export {
    loginController,
    createNewUserController
};