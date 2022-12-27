import React, { FC } from 'react';
import style from './styles/card.module.css'
import { OrderButton } from '../../../../common/OrderButton/OrderButton';

interface DishCardProps {
  description: string
  imageURL: string
  name: string
  value: number
}

interface ICardStyle {
  card: string
  cardImage: string
  cardImageWrapper: string
  priceStyle: string
  priceText: string
}

const { card, cardImage, cardImageWrapper, priceStyle, priceText }: ICardStyle = style;

export const DishCard: FC<DishCardProps> = ({ name, description, value, imageURL }): JSX.Element => {
  return (
    <div className={`${card}`}>
      <div className={`${cardImageWrapper}`}>
        <div className={cardImage} style={{ backgroundImage: `url(${imageURL})` }}/>
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
            <span className={`ml-auto font-weight-light ${priceText}`}>
              <strong>$</strong>
              {value}
            </span>
            <OrderButton/>
          </div>
        </div>
      </div>
    </div>
  );
};
