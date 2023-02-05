import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../common/common'
import { ICartItem } from '../../../common/models/CartModel/ICartItem'
import { cartSlice } from '../../../store/cart/cartSlice'
import { IDishCardItem } from '../DishCard/DishCard'
import style from './order.button.module.css'

export const QuantityController: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch()
  const {
    cart,
    itemMap
  } = useAppSelector(state => state.cartReducer)
  const {
    addItem,
    decreaseItem
  } = cartSlice.actions
  const itemQuantity = item.id in itemMap ? cart[itemMap[item.id]].quantity : 0
  const newItem: ICartItem = {
    id: item.id,
    name: item.name,
    description: item.description,
    price: item.price,
    imageURL: item.imageURL,
    quantity: itemQuantity
  }
  const handleIncreaseClick = (newItem: ICartItem) => {
    dispatch(addItem(newItem))
  }
  const handleDecreaseClick = (newItem: ICartItem) => {
    dispatch(decreaseItem(newItem))
  }
  return (
    <div className={`ms-auto my-auto ${style.buttonWrapper}`}>
      <button
        className={`${style.buttonStyle}`}
        onClick={() => handleDecreaseClick(newItem)}
        disabled={itemQuantity === 0}
      >
        {itemQuantity === 1
          ? <i className="fa fa-trash" aria-hidden="true"></i>
          : <i className="fa fa-minus" aria-hidden="true"></i>}
      </button>
      <span className={`my-auto mx-1 font-weight-light ${style.itemText}`}>
        <strong>{`${itemQuantity}×`}</strong>
      </span>
      <button className={style.buttonStyle} onClick={() => handleIncreaseClick(newItem)}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  )
}
