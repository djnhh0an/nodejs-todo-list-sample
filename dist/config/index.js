"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const envRootPath = path_1.default.resolve(process.cwd(), '.env');
let config = { path: `${envRootPath}` };
dotenv_1.default.config(config);
exports.default = {
    port: process.env.PORT,
    host: process.env.HOST,
    basePath: process.env.BASE_PATH,
    mongoUri: process.env.MONGO_URI,
    private_key: process.env.PRIVATE_KEY
};
//# sourceMappingURL=index.js.map