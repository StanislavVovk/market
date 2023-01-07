import React, { FC } from 'react';
import styles from './homepage.module.css'
import image from '../../../../assets/images/homepage_bg.jpg'
import { API_ENUM } from '../../../../enums/api.enum';

interface IHomeStyle {
  BodyContainer: string
  OrderButton: string
  Title: string
  Subtitle: string
}

const bgImage: string = image

const { BodyContainer, OrderButton, Title, Subtitle }: IHomeStyle = styles
export const Homepage: FC = (): JSX.Element => {
  return (
    <div className={`pt-5 ${BodyContainer}`}
         style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})` }}>
      <div className="container mt-5 pt-5">
        <h1 className={Title}>Pizza Hub Online Ordering</h1>
        <h1 className={Subtitle}>Your Yummy Pizza Delivered Fast & Fresh</h1>
        <a href={API_ENUM.MENU}>
          <button className={OrderButton}>Order Now</button>
        </a>
      </div>
    </div>
  );
};
