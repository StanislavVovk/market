import React, { FC } from 'react';
import style from '../cart.module.css';
import { ICartStyle } from '../Cart';
import { useAppDispatch, useAppSelector } from '../../../../../../store/hooks/hooks';
import { cartSlice } from '../../../../../../store/cart/reducer';
import { CartItem } from '../../../../../UI/common';
import { ICartItem } from '../../../../../../models/ICartItem';

const { Body, ClearButton, CartItemWrapper, CartUtils, CartTotalPrice }: ICartStyle = style;
const FullCart: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cart, totalPrice } = useAppSelector(state => state.cartReducer)
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
        {cart.map((item: ICartItem): JSX.Element => <CartItem key={item.id} item={item}/>)}
      </div>
      <div className={`${CartUtils}`}>
        <strong className={`mx-2${CartTotalPrice}`}>
          Total price: ${totalPrice}
        </strong>
      </div>
    </div>
  );
};

export default FullCart;
