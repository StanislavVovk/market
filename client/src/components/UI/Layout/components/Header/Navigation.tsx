import pizza from 'assets/images/pizza.png'
import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { NavLinksWrapper } from '../../../NavLinksWrapper/NavLinksWrapper'
import style from './navigation.module.css'

export const Navigation: FC = (): JSX.Element => (
  <div className={style.NavBar}>
    <Container className={style.NavBarContainer}>
      <div className={style.NavIcon}>
        <Link to="/">
          <img src={pizza} alt="Pizza Hub"/>
        </Link>
      </div>
      <div className={`ms-auto my-auto ${style.NavLinksHolder}`}>
        <NavLinksWrapper/>
      </div>
    </Container>
  </div>
)
