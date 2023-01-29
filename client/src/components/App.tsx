import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './UI/Layout/Layout';
import { Homepage } from './Homepage/Homepage';
import { ActionTypes, API_ENUM, useAppDispatch } from '../common/common';
import { Menu } from './Menu/Menu';
import { authSlice } from '../store/auth/authSlice';
import { auth } from '../firebase/firebase';

export const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const checkUser = authSlice.actions[ActionTypes.CHECK_USER]
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(checkUser(user))
      }
    })
  }, [dispatch])
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Homepage/>}/>
            <Route path={API_ENUM.MENU} element={<Menu/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}
