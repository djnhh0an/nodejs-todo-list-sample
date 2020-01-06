import config from '../config';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
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
    },
    {
        collection: 'User'
    }
);

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        isAdmin: this.isAdmin
    }, config.private_key);

    return token;
}

const model = mongoose.model("User", UserSchema);

const findByEmail = function (email: string) {
    return model.findOne({ email })
};

const createUser = (user: object) => model.create(user);

module.exports = {
    User: model,
    findByEmail,
    createUser
};
