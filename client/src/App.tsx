import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/UI/Layout/Layout';
import { Homepage } from './components/Pages/common';
import { API_ENUM } from './enums/api.enum';
import { Menu } from './components/Pages/Menu/Menu';

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route index element={ <Homepage/> } />
            <Route path={ API_ENUM.MENU } element={ <Menu/> }/>
          </Routes>
        </Layout>
      </Router>
    </>
  )
}
