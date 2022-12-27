import React, { FC } from 'react';
import style from './style/order.button.module.css'

interface IOrderButtonStyle {
  buttonStyle: string
  buttonWrapper: string
  itemText: string
}

const {
  buttonStyle,
  buttonWrapper,
  itemText
}: IOrderButtonStyle = style;

// todo add redux state here
export const OrderButton: FC = (): JSX.Element => {
  return (
    <div className={`ml-auto my-auto ${buttonWrapper}`}>
      <button className={`${buttonStyle}`}>
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
      <span className={`my-auto mx-1 font-weight-light ${itemText}`}>
        <strong>0</strong>
      </span>
      <button className={`${buttonStyle}`}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
    </div>
  )
}
