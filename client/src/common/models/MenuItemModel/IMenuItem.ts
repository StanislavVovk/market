export interface IMenuItem {
  id: number
  name: string
  description: string
  img: string
  price: number
}
export type MenuItemModel = Record<string, IMenuItem[]>

export enum MenuCategoryName {
  NonVeg = 'Non Vegetarian Pizza',
  Veg = 'Vegetarian Pizza',
  BestSeller = 'Best Seller'
}
