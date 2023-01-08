import React, { FC } from 'react';
import { QuantityController } from '../common';
import style from './cartItem.module.css'
import { IDishCardItem } from '../DishCard/DishCard';

interface ICartItemStyle {
  CartItemBody: string
  CartItemDescription: string
  CartItemPrice: string
  RemoveWrapper: string
  RemoveItemButton: string
}

const { CartItemBody, CartItemDescription, CartItemPrice, RemoveItemButton, RemoveWrapper }: ICartItemStyle = style
export const CartItem: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const { name, description, price } = item
  return (
    <div className={`${CartItemBody}`}>
      <div>
        <strong>{name}</strong>
        { /* todo remove this */ }
        <div className="wrapper">
        <span className={`font-italic font-weight-lighter text-muted ${CartItemDescription}`}>
          {description}
        </span>
        </div>
        <div className="row mt-2">
          <div className={`${CartItemPrice}`}>
            Price: $ {price}
          </div>
          <QuantityController item={item}/>
        </div>
        <div>
        </div>
      </div>
      <div className={`${RemoveWrapper}`}>
        <button className={`${RemoveItemButton}`}>
          <i className={'fa fa-xmark'} aria-hidden={true}></i>
        </button>
      </div>
    </div>
  );
};
