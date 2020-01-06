"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
const connect = () => {
    mongoose_1.default.Promise = global.Promise;
    mongoose_1.default.connect(config_1.default.mongoUri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000,
        poolSize: 10
    }, err => {
        if (err) {
            console.error("ERROR: An error happened whilst connecting to mongodb", {
                err
            });
        }
        else {
            console.info("INFO: Connect to mongodb successfully.");
        }
    });
};
exports.connect = connect;
const disconnect = (done) => {
    mongoose_1.default.disconnect(done);
};
exports.disconnect = disconnect;
//# sourceMappingURL=mongodb.js.map