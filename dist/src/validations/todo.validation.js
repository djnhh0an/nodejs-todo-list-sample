"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("@hapi/joi"));
const basicPayload = {
    name: joi_1.default.string().required().description("the record name")
};
const idPayload = {
    id: joi_1.default.string().required().description("record id")
};
const validations = {
    name: { payload: joi_1.default.object(basicPayload) },
};
exports.validations = validations;
const deleteValidation = {
    id: {
        params: joi_1.default.object(idPayload)
    }
};
exports.deleteValidation = deleteValidation;
//# sourceMappingURL=todo.validation.js.map