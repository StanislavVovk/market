import Joi from 'joi'
import { orderErrorMessage } from './orderErrorMessage/orderErrorMessage'
import { OrderSchemaRule } from './orderSchemaRules/orderSchemaRule'

export const OrderValidationSchema = Joi.object({
  buildingNumber: Joi.string()
    .trim()
    .min(OrderSchemaRule.BUILDING_NUMBER_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  streetName: Joi.string()
    .trim()
    .min(OrderSchemaRule.STREET_NAME_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  city: Joi.string()
    .trim()
    .min(OrderSchemaRule.CITY_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  state: Joi.string()
    .trim()
    .min(OrderSchemaRule.STATE_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  country: Joi.string()
    .trim()
    .min(OrderSchemaRule.COUNTRY_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  zipCode: Joi.number()
    .positive()
    .min(OrderSchemaRule.ZIP_CODE_MIN_LENGTH)
    .required()
    .messages({
      'number.required': orderErrorMessage.FIELD_REQUIRED,
      'number.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'number.base': orderErrorMessage.FIELD_NUMBER,
      'number.positive': orderErrorMessage.FIELD_POSITIVE,
      'number.empty': orderErrorMessage.FIELD_EMPTY
    })
})
