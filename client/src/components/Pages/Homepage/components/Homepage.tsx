import React, { FC } from 'react';
import styles from './styles.module.css'
import image from '../../../../resources/images/homepage_bg.jpg'
import { API_ENUM } from '../../../../enums/api.enum';

interface IHomeStyle {
  bodyContainer: string
  orderButton: string
  title: string
  subtitle: string
}

const bgImage: string = image

const { bodyContainer, orderButton, title, subtitle }: IHomeStyle = styles
export const Homepage: FC = (): JSX.Element => {
  return (
    <div className={ `pt-5 ${bodyContainer}` }
         style={ { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})` } }>
      <div className="container mt-5 pt-5">
        <h1 className={title}>Pizza Hub Online Ordering</h1>
        <h1 className={subtitle}>Your Yummy Pizza Delivered Fast & Fresh</h1>
        <a href={API_ENUM.MENU}>
          <button className={orderButton}>Order Now</button>
        </a>
      </div>
    </div>
  );
};
