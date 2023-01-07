import React, { FC } from 'react';
import style from './styles/menu.page.module.css'
import { DishCard } from './common/DishCard/DishCard';
import { Cart } from './common/common';

export interface IMenuPageStyle {
  menuContainer: string
  pageTitle: string
  clearfix: string
}

export interface IDishCardProps {
  id: number
  description: string
  imageURL: string
  name: string
  price: number
  quantity?: number
}

const { clearfix, menuContainer, pageTitle }: IMenuPageStyle = style

export const Menu: FC = (): JSX.Element => {
  const item1: IDishCardProps = {
    id: 1,
    name: 'Cool pizza',
    description: '1',
    price: 12,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  const item2: IDishCardProps = {
    id: 2,
    name: 'The best pizza',
    description: '2',
    price: 13,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  return (
    <div className={`container mt-5 pt-5 ${menuContainer}`}>
      <h1 className="display-6 mb-0">
        <strong className={pageTitle}>Menu</strong>
      </h1>
      <div className={clearfix}></div>
      <div className="row">
        <div className="col-lg-8">
          <div className="my-4">
            <DishCard item={item1}/>
            <DishCard item={item2}/>
          </div>
        </div>
        <Cart/>
      </div>
    </div>
  )
}
