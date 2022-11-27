import React, { ReactElement } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { NavLink } from 'react-router-dom';
import style from './navLink.module.css'

const { NavLinkStyle, NavLinkActive }: INavLink = style

export function NavLinkElement ({ link, text }: InferProps<typeof NavLinkElement.propTypes>): ReactElement {
  return (
    <NavLink to={ link } className={ ({ isActive }): string => {
      return isActive ? NavLinkStyle + ' ' + NavLinkActive : NavLinkStyle
    } }>
      ${ text }
    </NavLink>
  )
}

NavLinkElement.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

interface INavLink {
  NavLinkStyle: string
  NavLinkActive: string
}
