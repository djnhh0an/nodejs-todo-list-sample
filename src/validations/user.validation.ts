import Joi from "@hapi/joi";

const validateUser = (user: object) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(6).max(255).required()
    });

    return schema.validate(user);
};

const basicPayload = {
    email: Joi.string().required().description("email"),
    password: Joi.string().required().description("password"),
};

const validations = {
    user: { payload: Joi.object(basicPayload) },
};

export {
    validateUser,
    validations
};