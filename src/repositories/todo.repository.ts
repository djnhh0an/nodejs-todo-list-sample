import { Todo } from "../models/todo.model";
import mongoose, { Document } from "mongoose";

export interface TodoDocument extends Todo, Document {}

const TodoSchema = new mongoose.Schema(
    {
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
    },
    {
        collection: "Todo"
    }
);

export const model = mongoose.model<TodoDocument>("Todo", TodoSchema);

function toTodoModel(todoDocument: TodoDocument): Todo {
    return {
        name: todoDocument.name,
        createdAt: todoDocument.createdAt,
        updatedAt: todoDocument.updatedAt
    };
}

export const list = () => model.find();
export const create = (todo: { name: string }): Promise<Todo> => model.create(todo).then(result => toTodoModel(result));
export const findByName = (name: string) => model.findOne({ name });
export const deleteById = (id: string) => model.findByIdAndDelete(mongoose.Types.ObjectId(id));