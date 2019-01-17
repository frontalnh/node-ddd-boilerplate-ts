import Joi from 'joi';
export const CreateUserSchema = Joi.object().keys({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
  phone: Joi.string().required(),
  birthday: Joi.string()
    .length(10)
    .required()
});
