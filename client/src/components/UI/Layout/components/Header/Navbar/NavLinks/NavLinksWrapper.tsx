import React from 'react'
import style from './navLinks.module.css'
import { NavLink } from 'react-router-dom';
import { API_ENUM } from '../../../../../../../common/enums/api.enum'

const checkActivity = (ActivityStatus: boolean): string => {
  return ActivityStatus ? style.NavLinkStyle.concat(' ', style.NavLinkActive) : style.NavLinkStyle;
}

export const NavLinksWrapper: React.FC = (): JSX.Element => {
  return (
    <div className={`ms-auto my-auto ${style.NavLinksHolder}`}>
      <NavLink to={API_ENUM.HOME} className={({ isActive }): string => checkActivity(isActive)}>
        Home
      </NavLink>
      <NavLink to={API_ENUM.MENU} className={({ isActive }): string => checkActivity(isActive)}>
        Menu
      </NavLink>
      <NavLink to={API_ENUM.LOGIN} className={({ isActive }): string => checkActivity(isActive)}>
        Login
      </NavLink>
      <NavLink to={API_ENUM.SIGNUP} className={({ isActive }): string => checkActivity(isActive)}>
        Register
      </NavLink>
    </div>
  )
}
