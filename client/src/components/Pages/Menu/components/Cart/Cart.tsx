import React, { FC } from 'react';
import style from './cart.module.css'
import { useAppSelector } from '../../../../../common/hooks/hooks';
import { FullCart, VoidCart } from './components/common'

export interface ICartStyle {
  Body: string
  CartItemWrapper: string
  CartNavigationButton: string
  CartTotalPrice: string
  CartUtils: string
  CartWrapper: string
  ClearButton: string
  EmptyCart: string
  Separator: string
}

const { CartWrapper }: ICartStyle = style
export const Cart: FC = (): JSX.Element => {
  const cartSelector = useAppSelector(state => state.cartReducer)
  return (
    <div className="col-lg-4 mb-5">
      <div className={`${CartWrapper}`}>
        {cartSelector.cart.length !== 0 ? <FullCart/> : <VoidCart/>}
      </div>
    </div>
  );
}
