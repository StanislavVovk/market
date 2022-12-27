import React, { FC } from 'react';
import style from './styles/menu.page.module.css'
import { DishCard } from './common/DishCard/DishCard';

export interface IMenuPageStyle {
  menuContainer: string
  pageTitle: string
  clearfix: string
}

const { clearfix, menuContainer, pageTitle }: IMenuPageStyle = style

export const Menu: FC = (): JSX.Element => {
  return (
    <div className={ `container mt-5 pt-5 ${menuContainer}` }>
      <h1 className="display-6 mb-0">
        <strong className={ pageTitle }>Menu</strong>
      </h1>
      <div className={clearfix}></div>
      <div className="row">
        <div className="col-lg-8">
          <div className="my-4">
            <DishCard name={ '1' } description={ '1' } value={ 12 } imageURL={'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
