import React, { FC } from 'react';
import style from '../cart.module.css';

export const VoidCart: FC = (): JSX.Element => {
  return (
    <div className={`mt-4 ${style.Body}`}>
      <h1 className={'my-2 mx-2'}>Cart</h1>
      <div className="mx-2">
        <div className={`mx-2 ${style.EmptyCart}`}>
          <i className="fa fa-shopping-cart" aria-hidden={true}></i>
          <span>Cart is empty!</span>
        </div>
      </div>
    </div>
  );
};
