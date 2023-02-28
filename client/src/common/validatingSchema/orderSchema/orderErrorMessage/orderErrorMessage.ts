import { OrderSchemaRule } from '../orderSchemaRules/orderSchemaRule'

export const orderErrorMessage = {
  FIELD_REQUIRED: 'Field required',
  FIELD_EMPTY: 'Field can\'t be empty',
  FIELD_MIN_LENGTH: `Field must be more than 1 ${OrderSchemaRule.STATE_MIN_LENGTH}`,
  FIELD_NUMBER: 'Field must be a number',
  FIELD_POSITIVE: 'Field must be positive'
}
