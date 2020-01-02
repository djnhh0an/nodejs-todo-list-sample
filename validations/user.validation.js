const Joi = require('joi');

function validateUser(user) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    };

    return Joi.validate(user, schema);
}

const basicPayload = {
    email: Joi.string().required().description('email'),
    password: Joi.string().required().description('password'),
};

const validations = {
    user: { payload: Joi.object(basicPayload) },
};


module.exports = {
    validate: validateUser,
    validations
}