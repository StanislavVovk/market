export interface ICartItem {
  id: number
  name: string
  description: string
  price: number
  imageURL: string
  quantity: number
}

export interface ICartRemover {
  id: number
  quantity: number
}
