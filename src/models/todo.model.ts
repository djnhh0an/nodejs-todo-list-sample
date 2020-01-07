import mongoose from "mongoose";

type Todo = {
    name: string;
    createdAt: Date;
    updatedAt: Date;
};

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

export const model = mongoose.model("Todo", TodoSchema);
export const list = () => model.find();
export const create = (todo: { name: string }) => model.create(todo);
export const findByName = (name: string) => model.findOne({ name });
export const deleteById = (id: string) => model.findByIdAndDelete(mongoose.Types.ObjectId(id));