import Joi from 'joi'

const schema = Joi.object({
  firstName: Joi.string()
  .min(3)
  .max(30)
  .required(),
  lastName: Joi.string()
  .min(3)
  .max(30)
  .required(),
  password: Joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .min(8)
  .max(12)
  .required(),
    email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required(),
  specialist: Joi.string()
  .min(3)
  .max(30)
  .required()
})

export default {
    schema
}
