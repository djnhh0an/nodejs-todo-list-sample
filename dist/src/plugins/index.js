"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inert_1 = __importDefault(require("inert"));
const vision_1 = __importDefault(require("vision"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
const config_1 = __importDefault(require("../config"));
exports.default = [
    inert_1.default,
    vision_1.default,
    {
        plugin: hapi_swagger_1.default,
        options: {
            basePath: config_1.default.basePath,
            info: {
                title: config_1.default.pkg.name,
                version: config_1.default.pkg.version,
            },
            securityDefinitions: {
                jwt: {
                    type: "apiKey",
                    name: "Authorization",
                    in: "header",
                },
            },
        },
    }
];
//# sourceMappingURL=index.js.map