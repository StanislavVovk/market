import pizza from 'assets/images/pizza.png'
import type { FC } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { API_ENUM } from 'common/common'
import { NavLinksWrapper } from 'components/UI/NavLinksWrapper/NavLinksWrapper'
import style from './navigation.module.css'

export const Navigation: FC = (): JSX.Element => (
  <div className={style.NavBar}>
    <Container className={style.NavBarContainer}>
      <div className={style.NavIcon}>
        <Link to={API_ENUM.HOME}>
          <img src={pizza} alt="Pizza Hub"/>
        </Link>
      </div>
      <div className={`ms-auto my-auto ${style.NavLinksHolder}`}>
        <NavLinksWrapper/>
      </div>
    </Container>
  </div>
)
