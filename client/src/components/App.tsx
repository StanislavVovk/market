import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './UI/Layout/Layout';
import { Homepage } from './Homepage/Homepage';
import { SignUp } from './Sign/SignUp/SignUp';
import { API_ENUM } from '../common/enums/api.enum';
import { Menu } from './Menu/Menu';

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route index element={<Homepage/>}/>
            <Route path={API_ENUM.MENU} element={<Menu/>}/>
            <Route path={API_ENUM.SIGNUP} element={<SignUp/>}/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}
