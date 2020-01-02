const config = require('../config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

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
        collection : 'User'
    }
);

UserSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({
        _id: this._id,
        isAdmin: this.isAdmin
    }, config.private_key);

    return token;
}

const User = mongoose.model("User", UserSchema);

const findByEmail = email => User.findOne({ email });

module.exports = {
    User,
    findByEmail
};
