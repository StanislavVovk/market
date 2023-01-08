import React, { FC } from 'react';
import { QuantityController } from '../common';
import style from './cartItem.module.css'
import { IDishCardItem } from '../DishCard/DishCard';
import { cartSlice } from '../../../store/cart/reducer';
import { useAppDispatch } from '../../../common/hooks/hooks';
import { ICartRemover } from '../../../models/ICartItem';

interface ICartItemStyle {
  CartItemBody: string
  CartItemDescription: string
  CartItemPrice: string
  RemoveWrapper: string
  RemoveItemButton: string
}

const { CartItemBody, CartItemDescription, CartItemPrice, RemoveItemButton, RemoveWrapper }: ICartItemStyle = style
export const CartItem: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const { id, name, description, price, quantity } = item
  const dispatch = useAppDispatch()
  const removeItem = cartSlice.actions.removeItem
  const itemQuantity: number = quantity as number
  const newItem: ICartRemover = {
    id,
    quantity: itemQuantity
  }
  return (
    <div className={`row ${CartItemBody}`}>
      <div className={'col-lg-10'}>
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
        <div>
        </div>
      </div>
      <div className={`col-lg-2 ${RemoveWrapper}`}>
        <button className={`${RemoveItemButton}`}
                onClick={() => dispatch(removeItem(newItem))}>
          <i className={'fa fa-xmark fa-lg'} aria-hidden={true}></i>
        </button>
      </div>
    </div>
  );
};
