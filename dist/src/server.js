"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = __importDefault(require("@hapi/hapi"));
const routes_1 = __importDefault(require("./routes"));
const plugins = __importStar(require("./plugins"));
const config_1 = __importDefault(require("./config"));
const mongodb_1 = require("./middlewares/mongodb");
const init = async () => {
    const server = new hapi_1.default.Server({
        port: config_1.default.port,
        host: config_1.default.host
    });
    server.route(routes_1.default);
    await server.register(plugins);
    await server.start();
    console.info("INFO: Server running on %s/documentation", server.info.uri);
    mongodb_1.connect();
};
process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});
init();
//# sourceMappingURL=server.js.map