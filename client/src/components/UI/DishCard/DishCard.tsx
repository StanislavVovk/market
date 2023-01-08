import React, { FC } from 'react';
import style from './dishcard.module.css'
import { QuantityController } from '../common';
import { IDishCardProps } from '../../Pages/Menu/Menu';

export interface IDishCardItem {
  item: IDishCardProps
}

interface ICardStyle {
  Body: string
  CardImage: string
  CardImageWrapper: string
  PriceStyle: string
  PriceText: string
}

const { Body, CardImage, CardImageWrapper, PriceStyle, PriceText }: ICardStyle = style;

export const DishCard: FC<IDishCardItem> = ({ item }): JSX.Element => {
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
          <div className={`mb-2 ${PriceStyle}`}>
            <span className={`my-auto font-weight-light ${PriceText}`}>
              <strong>$</strong>
              {price}
            </span>
            <QuantityController item={item}/>
          </div>
        </div>
      </div>
    </div>
  );
};
