"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const response_model_1 = __importDefault(require("../models/response.model"));
const user_validation_1 = require("../validations/user.validation");
const routes = [
    {
        method: 'POST',
        path: '/users/login',
        config: {
            tags: ['api'],
            description: 'login',
            validate: user_validation_1.validations.user,
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form',
                    responses: response_model_1.default
                }
            }
        },
        handler: user_controller_1.loginController
    },
    {
        method: 'POST',
        path: '/users',
        config: {
            tags: ['api'],
            description: 'create a new user',
            validate: user_validation_1.validations.user,
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form',
                    responses: response_model_1.default
                }
            }
        },
        handler: user_controller_1.createNewUserController
    }
];
exports.default = routes;
//# sourceMappingURL=auth.route.js.map