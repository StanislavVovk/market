import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import style from './navLink.module.css'

interface INavLinkProps {
  text: string
  link: string
}

// todo recreate custom navigation link
export const NavLinkElement: FC<INavLinkProps> = ({
  link,
  text
}): JSX.Element => (
  <NavLink to={link}
           className={({ isActive }): string => isActive ? style.NavLinkStyle + ' ' + style.NavLinkActive : style.NavLinkStyle}>
    ${text}
  </NavLink>
)
