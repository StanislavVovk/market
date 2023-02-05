import { useAppDispatch, useAppSelector, API_ENUM } from 'common/common'
import { ICartItem } from 'common/models/CartModel/ICartItem'
import { CartItem } from 'components/UI/common'
import { cartSlice } from 'store/cart/cartSlice'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import style from '../cart.module.css'

export const FullCart: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const {
    cart,
    totalPrice,
    totalEquality
  } = useAppSelector(state => state.cartReducer)
  const { clearCart } = cartSlice.actions
  return (
    <div className={`mt-4 ${style.Body}`}>
      <h1 className={'my-2 mx-2'}>Cart</h1>
      <div className="mx-2">
          <span className={`my-2 mx-2 ${style.ClearButton}`}>
            <button onClick={() => dispatch(clearCart())}> Clear cart</button>
              </span>
      </div>
      <div className={`mx-2 ${style.CartItemWrapper}`}>
        {cart.map((item: ICartItem): JSX.Element => <CartItem key={item.id} item={item}/>)}
      </div>
      <div className={`${style.Separator}`}></div>
      <div className={`${style.CartUtils}`}>
        <Link to={API_ENUM.CART}>
          <button className={`${style.CartNavigationButton}`}> Order {totalEquality} for ${totalPrice}</button>
        </Link>
      </div>
    </div>
  )
}
