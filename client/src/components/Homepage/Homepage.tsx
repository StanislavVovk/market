import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import image from 'assets/images/homepage_bg.jpg'
import { API_ENUM } from 'common/enums/common'
import style from './homepage.module.css'

export const Homepage: FC = (): JSX.Element => {
  return (
    <div className={`pt-5 ${style.BodyContainer}`}
         style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})` }}>
      <Container className="mt-5 pt-5">
        <h1 className={style.Title}>Pizza Hub Online Ordering</h1>
        <h1 className={style.Subtitle}>Your Yummy Pizza Delivered Fast & Fresh</h1>
        <a href={API_ENUM.MENU}>
          <button className={style.OrderButton}>Order Now</button>
        </a>
      </Container>
    </div>
  )
}
