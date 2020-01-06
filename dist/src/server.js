"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const routes_1 = __importDefault(require("./routes"));
const plugins_1 = __importDefault(require("./plugins"));
const config_1 = __importDefault(require("./config"));
const mongodb_1 = require("./middlewares/mongodb");
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new hapi_1.default.Server({
        port: config_1.default.port,
        host: config_1.default.host
    });
    server.route(routes_1.default);
    yield server.register(plugins_1.default);
    yield server.start();
    console.info('INFO: Server running on %s/documentation', server.info.uri);
    mongodb_1.connect();
});
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=server.js.map