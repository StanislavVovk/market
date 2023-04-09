import { UserValidationMessage } from './schemaErrorMessage/errorMessage';
import { UserValidationRule } from './authSchemaRules/validationRules';
import Joi from 'joi'

export const SignUpValidation = Joi.object(
  {
    username: Joi.string()
      .alphanum()
      .min(UserValidationRule.USERNAME_MIN_LENGTH)
      .max(UserValidationRule.USERNAME_MAX_LENGTH)
      .required()
      .messages({
        'string.alphanum': UserValidationMessage.USERNAME_WRONG_SYMBOL,
        'string.empty': UserValidationMessage.USERNAME_REQUIRED,
        'string.max': UserValidationMessage.USERNAME_MAX_LENGTH,
        'string.min': UserValidationMessage.USERNAME_MIN_LENGTH
      }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required()
      .messages({
        'string.email': UserValidationMessage.EMAIL_WRONG,
        'string.empty': UserValidationMessage.EMAIL_REQUIRED
      }),
    password: Joi.string()
      .alphanum()
      .min(UserValidationRule.PASSWORD_MIN_LENGTH)
      .max(UserValidationRule.PASSWORD_MAX_LENGTH)
      .required()
      .messages({
        'string.alphanum': UserValidationMessage.PASSWORD_WRONG_SYMBOL,
        'string.empty': UserValidationMessage.PASSWORD_REQUIRED,
        'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH,
        'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH
      }),
    password_confirmation: Joi.any()
      .valid(Joi.ref('password'))
      .required()
      .messages({
        'any.only': UserValidationMessage.PASSWORD_CONFIRMATION_ERROR_MESSAGE
      })
  }
)
export const LoginValidationSchema = Joi.object(
  {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: false } })
      .required()
      .messages({
        'string.email': UserValidationMessage.EMAIL_WRONG,
        'string.empty': UserValidationMessage.EMAIL_REQUIRED
      }),
    password: Joi.string()
      .alphanum()
      .required()
      .messages({
        'string.alphanum': UserValidationMessage.PASSWORD_WRONG_SYMBOL,
        'string.min': UserValidationMessage.PASSWORD_REQUIRED
      })
  }
)
