import React, { FC } from 'react';
import style from '../cart.module.css';
import { ICartStyle } from '../Cart';
import { useAppDispatch, useAppSelector } from '../../../../../../common/hooks/hooks';
import { cartSlice } from '../../../../../../store/cart/reducer';
import { CartItem } from '../../../../../UI/common';
import { ICartItem } from '../../../../../../models/ICartItem';
import { Link } from 'react-router-dom';
import { API_ENUM } from '../../../../../../enums/api.enum';

const {
  Body,
  ClearButton,
  CartItemWrapper,
  CartUtils,
  CartNavigationButton,
  Separator
}: ICartStyle = style;
const FullCart: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { cart, totalPrice, totalEquality } = useAppSelector(state => state.cartReducer)
  const { clearCart } = cartSlice.actions
  console.log(totalEquality)
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
      <div className={`${Separator}`}></div>
      <div className={`${CartUtils}`}>
        <Link to={API_ENUM.CART}>
          <button className={`${CartNavigationButton}`}> Order {totalEquality} for ${totalPrice}</button>
        </Link>
      </div>
    </div>
  );
};

export default FullCart;
