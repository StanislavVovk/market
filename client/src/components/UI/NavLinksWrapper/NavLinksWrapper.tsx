import { useAppDispatch, useAppSelector, API_ENUM } from 'common/common'
import type { FC } from 'react'
import { modalActionCreator, profileActionCreator, cartActionCreator } from 'store/actions'
import { Sign } from '../common'
import { NavLinkElement } from '../NavLink/NavLink'
import style from './navLinks.module.css'

export const NavLinksWrapper: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.authReducer.user)

  const handleLoginClick = () => dispatch(modalActionCreator.showLogin())
  const handleRegistrationClick = () => dispatch(modalActionCreator.showRegistration())
  const onLogout = () => dispatch(profileActionCreator.logoutUser({}))
  const handleLogoutClick = async () => {
    await onLogout()
    dispatch(cartActionCreator.clearCart())
  }

  return (
    <div className="ms-auto me-auto d-flex">
      <NavLinkElement link={API_ENUM.HOME}>
        Home
      </NavLinkElement>
      <NavLinkElement link={API_ENUM.MENU}>
        Menu
      </NavLinkElement>
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
