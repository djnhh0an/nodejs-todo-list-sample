"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    isAdmin: Boolean,
}, {
    collection: "User"
});
UserSchema.methods.generateAuthToken = function () {
    const token = jsonwebtoken_1.default.sign({
        _id: this._id,
        isAdmin: this.isAdmin
    }, config_1.default.private_key);
    return token;
};
const model = mongoose_1.default.model("User", UserSchema);
const findByEmail = function (email) {
    return model.findOne({ email });
};
const createUser = (user) => model.create(user);
module.exports = {
    User: model,
    findByEmail,
    createUser
};
//# sourceMappingURL=user.model.js.map