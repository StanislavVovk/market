export interface ICartItem {
  id: number
  name: string
  description: string
  price: number
  img: string
  quantity: number
}

export interface CartModel {
  cart: ICartItem[]
  itemMap: Record<number, number>
  totalEquality: number
  totalPrice: number
}
