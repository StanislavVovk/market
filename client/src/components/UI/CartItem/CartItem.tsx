import React, { FC } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useAppDispatch } from '../../../common/common'
import { ShortCartItem } from '../../../common/models/CartModel/ICartItem'
import { cartSlice } from '../../../store/cart/cartSlice'
import { QuantityController } from '../common'
import { IDishCardItem } from '../DishCard/DishCard'
import style from './cartItem.module.css'

export const CartItem: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const {
    id,
    name,
    description,
    price,
    quantity
  } = item
  const dispatch = useAppDispatch()
  const removeItem = cartSlice.actions.removeItem
  const newItem: ShortCartItem = {
    id,
    quantity: quantity as number
  }
  return (
    <Row className={style.CartItemBody}>
      <Col lg={10}>
        <strong>{name}</strong>
        <div>
        <span className={`font-italic font-weight-lighter text-muted ${style.CartItemDescription}`}>
          {description}
        </span>
        </div>
        <Row className="mt-2 align-content-center">
          <Col lg={6} className={`${style.CartItemPrice}`}>
            Price: $ {price}
          </Col>
          <Col lg={6}>
            <QuantityController item={item}/>
          </Col>
        </Row>
      </Col>
      <Col lg={2} className={style.RemoveWrapper}>
        <button className={style.RemoveItemButton}
                onClick={() => dispatch(removeItem(newItem))}>
          <i className={'fa fa-xmark fa-lg'} aria-hidden={true}></i>
        </button>
      </Col>
    </Row>
  )
}
