import { ServerEndpoints } from './endpoints/ServiceEndpoints'
import { AuthUserMessages } from './messages/AuthUserMessages'
import { authErrorMessage } from './messages/ErrorMessage'
import { MENU_MESSAGE } from './messages/MenuMessages'
import { OrderMessages } from './messages/OrderMessages'
import { AddressPayloadEnum } from './payloads/addressPayload.enum'
import { OrderDefaultPayload } from './payloads/orderDefaultPayload'
import { DEFAULT_SIGNUP_PAYLOAD, DEFAULT_LOGIN_PAYLOAD } from './payloads/userDefaultPayload'

export {
  DEFAULT_SIGNUP_PAYLOAD,
  DEFAULT_LOGIN_PAYLOAD,
  OrderDefaultPayload,
  OrderMessages,
  AuthUserMessages,
  authErrorMessage,
  AddressPayloadEnum,
  ServerEndpoints,
  MENU_MESSAGE
}
