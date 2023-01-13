import Joi from 'joi'
import { UserValidationRule } from './schemaRules/validationRules';

export const SignUpValidation = Joi.object(
  {
    username: Joi.string()
      .alphanum()
      .min(UserValidationRule.USERNAME_MIN_LENGTH)
      .max(UserValidationRule.USERNAME_MAX_LENGTH)
      .required()
      .messages({}),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required(),
    password: Joi.string()
      .alphanum()
      .min(UserValidationRule.PASSWORD_MIN_LENGTH)
      .max(UserValidationRule.PASSWORD_MAX_LENGTH)
      .required(),
    password_confirmation: Joi.any()
      .valid(Joi.ref('password'))
      .required()
  }
)
// todo think about login validation
export const LoginValidationSchema = Joi.object(
  {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required(),
    password: Joi.string()
      .alphanum()
      .min(UserValidationRule.PASSWORD_MIN_LENGTH)
      .max(UserValidationRule.PASSWORD_MAX_LENGTH)
      .required()
  }
)
