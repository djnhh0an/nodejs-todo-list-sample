"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TodoSchema = new mongoose_1.default.Schema({
    name: {
        type: Object,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    collection: "Todo"
});
exports.model = mongoose_1.default.model("Todo", TodoSchema);
exports.list = () => exports.model.find();
exports.create = (todo) => exports.model.create(todo);
exports.findByName = (name) => exports.model.findOne({ name });
exports.deleteById = (id) => exports.model.findByIdAndDelete(mongoose_1.default.Types.ObjectId(id));
//# sourceMappingURL=todo.model.js.map