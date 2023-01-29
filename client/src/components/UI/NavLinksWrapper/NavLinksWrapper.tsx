import React, { FC, useState } from 'react'
import style from './navLinks.module.css'
import { Sign } from '../Sign/Sign';
import { NavLink } from 'react-router-dom';
import { API_ENUM, useAppDispatch, useAppSelector } from '../../../common/common';
import { profileActionCreator } from 'store/actions';

const checkActivity = (ActivityStatus: boolean): string => {
  return ActivityStatus ? style.NavLinkDefault.concat(' ', style.NavLinkActive) : style.NavLinkDefault;
}

export const NavLinksWrapper: FC = (): JSX.Element => {
  const [modalVisibilityState, setModalVisibility] = useState(false)
  const [loginState, changeLoginState] = useState(false)
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.authReducer.user)
  const handleLoginClick = () => {
    changeLoginState(true)
    setModalVisibility(true)
  }
  const handleRegistrationClick = () => {
    changeLoginState(false)
    setModalVisibility(true)
  }
  const onLogout = () => dispatch(profileActionCreator.logoutUser({}))
  const handleLogoutClick = () => {
    onLogout()
      .catch(e => {
        console.log(e)
      })
  }
  const handleModalChange = () => {
    changeLoginState(!loginState)
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
            onClick={() => handleLoginClick()}>
            Login
          </button>
          <button
            className={style.AuthButton}
            onClick={() => handleRegistrationClick()}>
            Register
          </button>
        </>
        : <>
          <button
            className={style.AuthButton}
            onClick={() => handleLogoutClick()}>
            Logout
          </button>
        </>
      }

      <Sign
        login={loginState}
        showModal={modalVisibilityState}
        onHideModal={() => setModalVisibility(false)}
        onModalChange={() => handleModalChange()}
      />
    </div>
  )
}
