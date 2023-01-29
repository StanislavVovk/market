export interface IUserLoginData {
  email: string
  password: string
}

export interface IUserRegistrationData extends IUserLoginData {
  username?: string
}
