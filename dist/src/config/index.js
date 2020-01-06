"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const package_json_1 = __importDefault(require("../../package.json"));
const envRootPath = path_1.default.resolve(process.cwd(), ".env");
const config = { path: `${envRootPath}` };
dotenv_1.default.config(config);
exports.default = {
    port: process.env.PORT,
    host: process.env.HOST,
    basePath: process.env.BASE_PATH,
    mongoUri: process.env.MONGO_URI,
    privateKey: process.env.PRIVATE_KEY,
    pkg: package_json_1.default
};
//# sourceMappingURL=index.js.map