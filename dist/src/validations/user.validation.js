"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const validateUser = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    });
    return schema.validate(user);
};
exports.validateUser = validateUser;
const basicPayload = {
    email: Joi.string().required().description('email'),
    password: Joi.string().required().description('password'),
};
const validations = {
    user: { payload: Joi.object(basicPayload) },
};
exports.validations = validations;
//# sourceMappingURL=user.validation.js.map