import mongooes from "mongoose";

const TodoSchema = new mongooes.Schema(
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
export const model = mongooes.model("Todo", TodoSchema);
export const list = () => model.find();
export const create = (todo: any) => model.create(todo);
export const findByName = (name: any) => model.findOne({ name });
export const deleteById = (id: any) => model.findByIdAndDelete(mongooes.Types.ObjectId(id));