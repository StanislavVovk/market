import type { UserModel } from 'common/common'
import { API_ENUM, useAppDispatch, useAppSelector } from 'common/common'
import type { FC } from 'react'
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { getUserAddress } from 'store/address/actions/actions'
import { addressActions } from 'store/address/addressSlice'
import { AuthActionTypes } from 'store/auth/actions/AuthActionTypes'
import { authSlice } from 'store/auth/authSlice'
import { auth } from '../firebase/firebase'
import { NotFoundComponent } from './404/NotFoundComponent'
import { Homepage, Layout, MenuComponent, OrderComponent } from './common'
import { PrivateRoute } from './UI/PrivateRouter/PrivateRoute'

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

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path={API_ENUM.HOME} element={<Homepage/>}/>
            <Route path={API_ENUM.MENU} element={<MenuComponent/>}/>
            <Route path={API_ENUM.ORDER} element={<PrivateRoute component={OrderComponent}/>}/>
            <Route path={API_ENUM.NOT_FOUND} element={<NotFoundComponent/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}
