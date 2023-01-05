import React from 'react';
import style from '../../styles/cart.module.css';
import { ICartStyle } from '../../Cart';
import { useAppDispatch } from '../../../../../../../store/hooks/hooks';
import { cartSlice } from '../../../../../../../store/cart/reducer';

const { Body, ClearButton, CartBody }: ICartStyle = style;
const FullCart = () => {
  const dispatch = useAppDispatch();
  const { clearCart } = cartSlice.actions
  return (
    <div className={`mt-4 ${Body}`}>
      <h1 className={'my-2 mx-2'}>Cart</h1>
      <div className="mx-2">
          <span className={`my-2 mx-2 ${ClearButton}`}>
            <button onClick={() => dispatch(clearCart())}> Clear cart</button>
              </span>
      </div>
      <div className={`mx-2 ${CartBody}`}></div>
    </div>
  );
};

export default FullCart;
