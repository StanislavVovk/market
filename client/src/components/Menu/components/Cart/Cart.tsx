import React, { FC } from 'react'
import { useAppSelector } from 'common/common'
import style from './cart.module.css'
import { FullCart, VoidCart } from './components/common'

export const Cart: FC = (): JSX.Element => {
  const cartSelector = useAppSelector(state => state.cartReducer)
  return (
    <div className={style.CartWrapper}>
      {cartSelector.cart.length !== 0 ? <FullCart/> : <VoidCart/>}
    </div>

  )
}
