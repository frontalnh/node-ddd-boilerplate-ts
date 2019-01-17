import Joi from 'joi';
export const FilterSchema = Joi.object().keys({
  where: Joi.object(),
  limit: Joi.number(),
  skip: Joi.number(),
  offset: Joi.number()
});
