import { ICartItem } from './ICartItem';

export interface IMenuItem {
  cartItem: ICartItem
  veg: boolean
  sold: number
}
