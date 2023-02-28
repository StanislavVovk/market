export interface IUserAuthData {
  email: string
  password: string
  username: string
}

export type UsernameData = Pick<IUserAuthData, 'username'>
export type UserAuthData = Omit<IUserAuthData, 'username'>
