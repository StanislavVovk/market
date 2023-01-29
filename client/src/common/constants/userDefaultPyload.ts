import { UserPayloadKey } from '../enums/user/userPayoadKey.enum';

export const DEFAULT_LOGIN_PAYLOAD = {
  [UserPayloadKey.EMAIL]: '',
  [UserPayloadKey.PASSWORD]: ''
}
export const DEFAULT_SIGNUP_PAYLOAD = {
  [UserPayloadKey.USERNAME]: '',
  [UserPayloadKey.EMAIL]: '',
  [UserPayloadKey.PASSWORD]: '',
  [UserPayloadKey.REPEAT_PASSWORD]: ''
}
