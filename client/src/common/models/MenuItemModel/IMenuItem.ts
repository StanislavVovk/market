import { ICartItem } from '../CartModel/ICartItem';

export interface IMenuItem {
  cartItem: ICartItem
  veg: boolean
  sold: number
}
