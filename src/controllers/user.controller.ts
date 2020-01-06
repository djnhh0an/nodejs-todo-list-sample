import { login, createNewUser } from "../services/user.service";

const loginController = (request: any, h: any) => {
    return login(request.payload, h);
};

const createNewUserController = (request: any, h: any) => {
    return createNewUser(request.payload, h);
};

export {
    loginController,
    createNewUserController
};