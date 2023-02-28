export interface ICartItem {
  id: number
  name: string
  description: string
  price: number
  imageURL: string
  quantity: number
}

export type ShortCartItem = Pick<ICartItem, 'id' | 'quantity'>

export interface CartModel {
  cart: ICartItem[]
  itemMap: Record<number, number>
  totalEquality: number
  totalPrice: number
}
