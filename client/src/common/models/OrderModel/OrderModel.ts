import { IAddress } from 'store/address/addressSlice'
import { ICartItem } from '../CartModel/ICartItem'

export interface OrderModel {
  cart: ICartItem[]
  address: IAddress
  paymentMethod: string
  time: Date
}

export interface OrderData { [p: number]: OrderModel }

export interface OrderDataType {
  uid: string
  order: OrderData
}
