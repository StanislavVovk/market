import React, { FC } from 'react';
import style from '../../styles/cart.module.css';
import { ICartStyle } from '../../Cart';
import { useAppDispatch, useAppSelector } from '../../../../../../../store/hooks/hooks';
import { cartSlice } from '../../../../../../../store/cart/reducer';
import CartItem from '../../../../../../common/CartItem/CartItem';
import { ICartItem } from '../../../../../../../models/ICartItem';

const { Body, ClearButton, CartItemWrapper }: ICartStyle = style;
const FullCart: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cartSelector = useAppSelector(state => state.cartReducer.cart)
  const { clearCart } = cartSlice.actions
  return (
    <div className={`mt-4 ${Body}`}>
      <h1 className={'my-2 mx-2'}>Cart</h1>
      <div className="mx-2">
          <span className={`my-2 mx-2 ${ClearButton}`}>
            <button onClick={() => dispatch(clearCart())}> Clear cart</button>
              </span>
      </div>
      <div className={`mx-2 ${CartItemWrapper}`}>
        {cartSelector.map((item: ICartItem): JSX.Element => {
          return <CartItem key={item.id} item={item}/>
        })}
      </div>
    </div>
  );
};

export default FullCart;
