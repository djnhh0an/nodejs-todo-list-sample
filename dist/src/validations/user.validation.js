"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const validateUser = (user) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().min(3).max(50),
        email: joi_1.default.string().min(5).max(255).required().email(),
        password: joi_1.default.string().min(6).max(255).required()
    });
    return schema.validate(user);
};
exports.validateUser = validateUser;
const basicPayload = {
    email: joi_1.default.string().required().description("email"),
    password: joi_1.default.string().required().description("password"),
};
const validations = {
    user: { payload: joi_1.default.object(basicPayload) },
};
exports.validations = validations;
//# sourceMappingURL=user.validation.js.map