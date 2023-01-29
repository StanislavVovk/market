import React from 'react'
import { Link } from 'react-router-dom'
import style from './navigation.module.css'
import pizza from '../../../../../assets/images/pizza.png'
import { NavLinksWrapper } from '../../../NavLinksWrapper/NavLinksWrapper';
import { Container } from 'react-bootstrap';

export const Navigation: React.FC = (): JSX.Element => {
  return (
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
}
