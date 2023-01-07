import React from 'react'
import { Link } from 'react-router-dom'
import style from './navigation.module.css'
import pizza from '../../../../../../assets/images/pizza.png'
import { NavLinksWrapper } from './NavLinks/NavLinksWrapper';

interface INavBarStyle {
  NavBarContainer: string
  NavBar: string
  NavIcon: string
  NavLinksHolder: string
}

const { NavBarContainer, NavBar, NavIcon, NavLinksHolder }: INavBarStyle = style

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <div className={ `${NavBar}` }>
      <div className={ `container ${NavBarContainer}` }>
        <div className={ NavIcon }>
          <Link to="/">
            <img src={ pizza } alt="Pizza Hub"/>
          </Link>
        </div>
        <div className={ `ms-auto my-auto ${NavLinksHolder}` }>
          <NavLinksWrapper/>
        </div>
      </div>
    </div>
  )
}
