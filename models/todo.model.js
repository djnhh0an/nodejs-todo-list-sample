const mongooes = require('mongoose');
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
        collection: 'Todo'
    }
);
const model = mongooes.model('Todo', TodoSchema);
const list = () => model.find();
const create = (todo) => model.create(todo);
const findByName = name => model.findOne({ name });
const deleteById = id => model.findByIdAndDelete(mongooes.Types.ObjectId(id));

module.exports = {
    model,
    list,
    create,
    findByName,
    deleteById,
    schema: TodoSchema
};