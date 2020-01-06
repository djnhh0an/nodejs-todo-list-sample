const userService = require('../services/user.service');

const loginController = (request: any, h: any) => {
    return userService.login(request.payload);
};

const createNewUserController = (request: any, h: any) => {
    return userService.createNewUser(request.payload);
};

export {
    loginController,
    createNewUserController
};