import React, { FC } from 'react';
import style from './order.button.module.css'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
import { cartSlice } from '../../../store/cart/reducer';
import { IDishCardItem } from '../DishCard/DishCard';
import { ICartItem } from '../../../models/ICartItem';

interface IQuantityControllerStyle {
  buttonStyle: string
  buttonWrapper: string
  itemText: string
}

const {
  buttonStyle,
  buttonWrapper,
  itemText
}: IQuantityControllerStyle = style;

export const QuantityController: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cart, itemMap } = useAppSelector(state => state.cartReducer);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { addItem, decreaseItem } = cartSlice.actions;
  const itemQuantity = item.id in itemMap ? cart[itemMap[item.id]].quantity : 0
  const newItem: ICartItem = {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    imageURL: item.imageURL,
    quantity: itemQuantity
  }

  return (
    <div className={`ms-auto my-auto ${buttonWrapper}`}>
      <button className={`${buttonStyle}`}>
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
      <span className={`my-auto mx-1 font-weight-light ${itemText}`}>
        <strong>{itemQuantity}</strong>
      </span>
      <button className={`${buttonStyle}`} onClick={() => dispatch(addItem(newItem))}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  )
}
