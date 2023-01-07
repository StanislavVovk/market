import React, { FC } from 'react';
import { ICartStyle } from '../Cart';
import style from '../cart.module.css';

const { Body, EmptyCart }: ICartStyle = style;
const VoidCart: FC = (): JSX.Element => {
  return (
    <div className={`mt-4 ${Body}`}>
      <h1 className={'my-2 mx-2'}>Cart</h1>
      <div className="mx-2">
        <div className={`mx-2 ${EmptyCart}`}>
          <i className="fa fa-shopping-cart" aria-hidden={true}></i>
          <span>Cart is empty!</span>
        </div>
      </div>
    </div>
  );
};

export default VoidCart;
