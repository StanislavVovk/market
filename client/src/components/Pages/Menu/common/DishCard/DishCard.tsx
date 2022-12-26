import React, { FC } from 'react';
import style from './styles/card.module.css'

interface DishCardProps {
  name: string
  description: string
  value: number
}

interface ICardStyle {
  card: string
  image: string
  priceStyle: string
  priceText: string
}

const { card, image, priceStyle, priceText }: ICardStyle = style;

export const DishCard: FC<DishCardProps> = ({ name, description, value }): JSX.Element => {
  return (
    <div className={`${card}`}>
      <div className={`${image}`}>
      </div>
      <div className="container">
        <span></span>
        <br/>
        <span></span>
        <div className="row">
          <div className={`mb-2 ${priceStyle}`}>
            <span className={`ml-auto font-weight-light ${priceText}`}>
              <strong>$</strong>
              ${value}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
