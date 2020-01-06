"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
const loginController = (request, h) => {
    return user_service_1.login(request.payload, h);
};
exports.loginController = loginController;
const createNewUserController = (request, h) => {
    return user_service_1.createNewUser(request.payload, h);
};
exports.createNewUserController = createNewUserController;
//# sourceMappingURL=user.controller.js.map