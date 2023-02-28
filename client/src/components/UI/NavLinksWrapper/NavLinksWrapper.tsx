import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector, API_ENUM } from 'common/common'
import { modalActionCreator, profileActionCreator } from 'store/actions'
import { Sign } from '../common'
import style from './navLinks.module.css'

const checkActivity = (ActivityStatus: boolean): string => ActivityStatus ? style.NavLinkDefault.concat(' ', style.NavLinkActive) : style.NavLinkDefault

export const NavLinksWrapper: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.authReducer.user)

  const handleLoginClick = () => dispatch(modalActionCreator.showLogin())
  const handleRegistrationClick = () => dispatch(modalActionCreator.showRegistration())
  const onLogout = () => dispatch(profileActionCreator.logoutUser({}))
  const handleLogoutClick = async () => {
    await onLogout()
  }
  return (
    <div className="ms-auto my-auto d-flex">
      <NavLink to={API_ENUM.HOME} className={({ isActive }) => checkActivity(isActive)}>
        Home
      </NavLink>
      <NavLink to={API_ENUM.MENU} className={({ isActive }) => checkActivity(isActive)}>
        Menu
      </NavLink>
      {!user
        ? <>
          <button
            className={style.AuthButton}
            onClick={handleLoginClick}>
            Login
          </button>
          <button
            className={style.AuthButton}
            onClick={handleRegistrationClick}>
            Register
          </button>
        </>
        : <>
          <button
            className={style.AuthButton}
            onClick={handleLogoutClick}>
            Logout
          </button>
        </>
      }
      <Sign/>
    </div>
  )
}
