export const ActionTypes: Record<keyof IActionTypes, string> = {
  LOG_IN: 'authAction/login',
  SIGN_UP: 'authAction/register',
  SIGN_WITH_PROVIDER: 'authAction/signWithProvider',
  LOGOUT: 'authAction/logout',
  CHECK_USER: 'authAction/checkUser',
  CHANGE_USERNAME: 'authAction/changeUsername'
}

export interface IActionTypes {
  LOG_IN: string
  SIGN_UP: string
  SIGN_WITH_PROVIDER: string
  LOGOUT: string
  CHECK_USER: string
  CHANGE_USERNAME: string
}
