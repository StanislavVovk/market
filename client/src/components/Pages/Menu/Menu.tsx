import React, { FC } from 'react';
import style from './menu.module.css'
import { DishCard } from '../../UI/DishCard/DishCard';
import { Cart } from './components/common';

export interface IMenuPageStyle {
  Clearfix: string
  MenuContainer: string
  PageTitle: string
}

export interface IDishCardProps {
  description: string
  id: number
  imageURL: string
  name: string
  price: number
  quantity?: number
}

const { Clearfix, MenuContainer, PageTitle }: IMenuPageStyle = style

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
  const item3: IDishCardProps = {
    id: 3,
    name: 'The best pizza',
    description: '2',
    price: 13,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  const item4: IDishCardProps = {
    id: 4,
    name: 'The best pizza',
    description: '2',
    price: 13,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  return (
    <div className={`container mt-5 pt-5 ${MenuContainer}`}>
      <h1 className="display-6 mb-0">
        <strong className={PageTitle}>Menu</strong>
      </h1>
      <div className={Clearfix}></div>
      <div className="row">
        <div className="col-lg-8">
          <div className="my-4">
            <DishCard item={item1}/>
            <DishCard item={item2}/>
            <DishCard item={item3}/>
            <DishCard item={item4}/>
          </div>
        </div>
        <Cart/>
      </div>
    </div>
  )
}
