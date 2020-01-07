import Joi from "@hapi/joi";

export const todoObjectValidation = Joi.object({
  name: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required()
});

const basicPayload = {
  name: Joi.string().required().description("the record name")
};

const idPayload = {
  id: Joi.string().required().description("record id")
};

const validations = {
  name: { payload: Joi.object(basicPayload) },
};

const deleteValidation = {
  id: {
    params: Joi.object(idPayload)
  }
};

export { validations, deleteValidation };
