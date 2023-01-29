import { UserValidationRule } from '../schemaRules/validationRules';

export const UserValidationMessage = {
  USERNAME_REQUIRED: 'Username is required',
  USERNAME_WRONG_SYMBOL: 'Whoops, probably, you used wrong character',
  USERNAME_MIN_LENGTH: `Username must be at least ${UserValidationRule.USERNAME_MIN_LENGTH} characters long`,
  USERNAME_MAX_LENGTH: `Username must be at most ${UserValidationRule.USERNAME_MAX_LENGTH} characters long`,
  EMAIL_REQUIRED: 'Email is required',
  EMAIL_WRONG: 'Email is wrong',
  EMAIL_WRONG_SYMBOL: 'Whoops, probably, you used wrong character',
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_MIN_LENGTH: `Password must be at least ${UserValidationRule.PASSWORD_MIN_LENGTH} characters long`,
  PASSWORD_MAX_LENGTH: `Password must be at most ${UserValidationRule.PASSWORD_MAX_LENGTH} characters long`,
  PASSWORD_WRONG_SYMBOL: 'Whoops, probably, you used wrong character',
  PASSWORD_CONFIRMATION_ERROR_MESSAGE: 'Passwords didn\'t match'
}
