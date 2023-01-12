import React, { FC } from 'react';
import style from './dishcard.module.css'
import { QuantityController } from '../common';
import { IDishCardProps } from '../../Menu/Menu';
import { Row } from 'react-bootstrap';

export interface IDishCardItem {
  item: IDishCardProps
}

export const DishCard: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const { name, price, imageURL, description }: IDishCardProps = item
  return (
    <div className={style.Body}>
      <div className={style.CardImageWrapper}>
        <div className={style.CardImage} style={{ backgroundImage: `url(${imageURL})` }}/>
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
        <Row>
          <div className={`mb-2 ${style.PriceStyle}`}>
            <span className={`my-auto font-weight-light ${style.PriceText}`}>
              <strong>$</strong>
              {price}
            </span>
            <QuantityController item={item}/>
          </div>
        </Row>
      </div>
    </div>
  );
};
