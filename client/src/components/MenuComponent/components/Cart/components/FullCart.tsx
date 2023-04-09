import type { ICartItem } from 'common/common'
import { useAppDispatch, useAppSelector, API_ENUM } from 'common/common'
import { CartItem } from 'components/UI/common'
import type { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { modalActionCreator } from 'store/actions'
import { cartSlice } from 'store/cart/cartSlice'
import style from '../cart.module.css'

export const FullCart: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const {
    cart,
    totalPrice,
    totalEquality
  } = useAppSelector(state => state.cartReducer)
  const { clearCart } = cartSlice.actions
  const user = useAppSelector(state => state.authReducer.user)
  const navigate = useNavigate()
  const handleCreateOrder = () => {
    if (!user) {
      dispatch(modalActionCreator.showLogin())
    } else {
      navigate(API_ENUM.ORDER)
    }
  }
  return (
    <div className={`mt-4 ${style.Body}`}>
      <h1 className={'my-2 mx-2'}>Cart</h1>
      <div className="mx-2">
          <span className={`my-2 mx-2 ${style.ClearButton}`}>
            <button onClick={() => dispatch(clearCart())}> Clear cart</button>
              </span>
      </div>
      <div className={`mx-2 ${style.CartItemWrapper}`}>
        {cart.map((item: ICartItem): JSX.Element => <CartItem key={item.id} cartItem={item}/>)}
      </div>
      <div className={`${style.Separator}`}/>
      <div className={`${style.CartUtils}`}>
        <button
          className={`${style.CartNavigationButton}`}
          onClick={handleCreateOrder}
        >
          Order {totalEquality} for ${totalPrice}
        </button>
      </div>
    </div>
  )
}
