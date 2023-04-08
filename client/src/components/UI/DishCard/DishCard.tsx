import { IMenuItem } from 'common/common'
import style from './dishcard.module.css'
import { QuantityController } from '../common';
import type { FC } from 'react'
import { Row } from 'react-bootstrap';

export interface IDishCardItem {
  item: IMenuItem
}

export const DishCard: FC<IDishCardItem> = ({ item }): JSX.Element => {
  const { name, price, img, description }: IMenuItem = item
  return (
    <div className={style.Body}>
      <div className={style.CardImageWrapper}>
        <div className={style.CardImage} style={{ backgroundImage: `url(${img})` }}/>
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
