import React, { FC } from 'react';
import { useAppSelector } from '../../../../../store/hooks/hooks';
import { FullCart, VoidCart } from './components/common'

export interface ICartStyle {
  Body: string
  CartItemWrapper: string
  CartTotalPrice: string
  CartUtils: string
  ClearButton: string
  EmptyCart: string
}

export const Cart: FC = (): JSX.Element => {
  const cartSelector = useAppSelector(state => state.cartReducer)
  return (
    <div className="col-lg-4 mb-5">
      {cartSelector.cart.length !== 0 ? <FullCart/> : <VoidCart/>}
    </div>
  );
}
