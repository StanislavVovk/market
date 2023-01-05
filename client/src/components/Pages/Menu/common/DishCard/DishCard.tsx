import React, { FC } from 'react';
import style from './styles/card.module.css'
import { OrderButton } from './OrderButton/OrderButton';
import { IDishCardProps } from '../../Menu';

export interface IDishCard {
  item: IDishCardProps
}

interface ICardStyle {
  Body: string
  CardImage: string
  CardImageWrapper: string
  priceStyle: string
  priceText: string
}

const { Body, CardImage, CardImageWrapper, priceStyle, priceText }: ICardStyle = style;

export const DishCard: FC<IDishCard> = ({ item }): JSX.Element => {
  const { name, price, imageURL, description }: IDishCardProps = item
  return (
    <div className={`${Body}`}>
      <div className={`${CardImageWrapper}`}>
        <div className={CardImage} style={{ backgroundImage: `url(${imageURL})` }}/>
      </div>
      <div className="container">
        <span className="font-weight-light pt-2">
          <strong>
            {name}
          </strong>
        </span>
        <br/>
        <span>
          {description}
        </span>
        <div className="row">
          <div className={`mb-2 ${priceStyle}`}>
            <span className={`my-auto font-weight-light ${priceText}`}>
              <strong>$</strong>
              {price}
            </span>
            <OrderButton item={item}/>
          </div>
        </div>
      </div>
    </div>
  );
};
