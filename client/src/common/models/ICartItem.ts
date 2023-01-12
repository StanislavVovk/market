export interface ICartItem {
  id: number
  name: string
  description: string
  price: number
  imageURL: string
  quantity: number
}

export type ShortCartItem = Pick<ICartItem, 'id' | 'quantity'>
