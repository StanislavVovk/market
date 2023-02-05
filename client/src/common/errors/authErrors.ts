import { AuthErrorCodes } from '@firebase/auth'
import { FirebaseError } from '@firebase/util';
import { authErrorMessage } from '../constants/errorMessage'

export const authErrorHandler = (error: FirebaseError) => {
  switch (error.code) {
    case AuthErrorCodes.USER_DELETED:
      error.message = authErrorMessage.USER_DOESNT_EXISTS
      break
    case AuthErrorCodes.EMAIL_EXISTS:
      error.message = authErrorMessage.EMAIL_EXISTS
      break
    case AuthErrorCodes.INVALID_PASSWORD:
      error.message = authErrorMessage.INVALID_PASSWORD
      break
    case AuthErrorCodes.TIMEOUT:
      error.message = authErrorMessage.TIMEOUT
      break
    case AuthErrorCodes.INTERNAL_ERROR:
      error.message = authErrorMessage.INTERNAL_SERVER_ERROR
      break
    default:
      break
  }
  return error
}
