"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userService = require('../services/user.service');
const loginController = (request, h) => {
    return userService.login(request.payload);
};
exports.loginController = loginController;
const createNewUserController = (request, h) => {
    return userService.createNewUser(request.payload);
};
exports.createNewUserController = createNewUserController;
//# sourceMappingURL=user.controller.js.map