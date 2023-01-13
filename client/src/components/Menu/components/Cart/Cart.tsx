import React, { FC } from 'react';
import style from './cart.module.css'
import { useAppSelector } from '../../../../common/hooks/hooks';
import { FullCart, VoidCart } from './components/common'

export const Cart: FC = (): JSX.Element => {
  const cartSelector = useAppSelector(state => state.cartReducer)
  return (
      <div className={style.CartWrapper}>
        {cartSelector.cart.length !== 0 ? <FullCart/> : <VoidCart/>}
      </div>

  );
}
