export interface IMenuItem {
  id: number
  name: string
  description: string
  img: string
  price: number
}
export type MenuItemModel = Record<string, IMenuItem[]>

// todo create right category names
export enum MenuCategoryName {
  NonVeg = 'NonVeg',
  Veg = 'Veg',
  BestSeller = 'BestSeller'
}

export type ValueOf<T> = T[keyof T]
