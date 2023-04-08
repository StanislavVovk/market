import { API_ENUM, useAppDispatch, useAppSelector } from 'common/common'
import { useEffect } from 'react'
import type { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { authSlice } from 'store/auth/authSlice'
import { UserModel } from 'common/models/UserModel/AuthUserModel'
import { auth } from '../firebase/firebase'
import { getUserAddress } from 'store/address/actions/actions'
import { addressActions } from 'store/address/addressSlice'
import { AuthActionTypes } from 'store/auth/actions/AuthActionTypes'
import { Homepage, Layout, MenuComponent, OrderComponent } from './common'

export const App: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const checkUser = authSlice.actions[AuthActionTypes.CHECK_USER]
  const user = useAppSelector(state => state.authReducer.user)

  useEffect(() => {
    if (user) {
      void dispatch(getUserAddress(user.uid))
        .then((addressData) => {
          if (addressData.payload) {
            dispatch(addressActions.changeUpdateStatus())
          }
        })
    }
  }, [dispatch, user])

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const {
          uid,
          photoURL,
          email,
          emailVerified,
          displayName
        } = user
        const userData: UserModel = {
          uid,
          photoURL,
          email,
          emailVerified,
          displayName
        }
        dispatch(checkUser(userData))
      }
    })
  }, [checkUser, dispatch])
  // todo create private route for order page
  // fixme Problem's with cookies by simplifying of User type

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path={API_ENUM.HOME} element={<Homepage/>}/>
            <Route path={API_ENUM.MENU} element={<MenuComponent/>}/>
            <Route path={API_ENUM.ORDER} element={<OrderComponent/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}
