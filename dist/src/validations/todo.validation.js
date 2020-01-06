"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require('@hapi/joi');
const basicPayload = {
    name: Joi.string().required().description('the record name')
};
const idPayload = {
    id: Joi.string().required().description('record id')
};
const validations = {
    name: { payload: Joi.object(basicPayload) },
};
exports.validations = validations;
const deleteValidation = {
    id: {
        params: Joi.object(idPayload)
    }
};
exports.deleteValidation = deleteValidation;
//# sourceMappingURL=todo.validation.js.map