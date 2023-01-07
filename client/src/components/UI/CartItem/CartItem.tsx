import React, { FC } from 'react';
import { QuantityController } from '../QuantityContoller/QuantityController';
import { IDishCardItem } from '../DishCard/DishCard';
import style from './styles/cartItem.module.css'

interface ICartItemStyle {
  CartItemBody: string
  CartItemDescription: string
  CartItemPrice: string
}

const { CartItemBody, CartItemDescription, CartItemPrice }: ICartItemStyle = style
const CartItem: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const { name, description, price } = item
  return (
    <div className={`${CartItemBody}`}>
        <strong>{name}</strong>
      <div>
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
    </div>
  );
};

export default CartItem;
