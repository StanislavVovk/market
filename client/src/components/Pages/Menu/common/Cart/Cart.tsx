import React, { FC } from 'react';
import { useAppSelector } from '../../../../../store/hooks/hooks';
import FullCart from './common/FullCart/FullCart';
import VoidCart from './common/VoidCart/VoidCart';

export interface ICartStyle {
  Body: string
  CartBody: string
  ClearButton: string
  EmptyCart: string
}

export const Cart: FC = (): JSX.Element => {
  const cartSelector = useAppSelector(state => state.cartReducer)
  return (
    <div className="col-lg-4 mb-5">
      {cartSelector.cart.length !== 0 ? <FullCart/> : <VoidCart/> }
    </div>
  );
}
