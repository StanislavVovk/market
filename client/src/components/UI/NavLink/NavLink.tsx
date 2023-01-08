import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import style from './navLink.module.css'

const { NavLinkStyle, NavLinkActive }: INavLink = style

interface INavLinkProps {
  text: string
  link: string
}

interface INavLink {
  NavLinkStyle: string
  NavLinkActive: string
}

// todo recreate custom navigation link
export const NavLinkElement: FC<INavLinkProps> = ({ link, text }): JSX.Element => {
  return (
    <NavLink to={link} className={({ isActive }): string => {
      return isActive ? NavLinkStyle + ' ' + NavLinkActive : NavLinkStyle
    }}>
      ${text}
    </NavLink>
  )
}
