import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/common/Layout/Layout';
import { Homepage } from './components/Pages/common';

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
          <Layout>
            <Routes>
            <Route path={ '/' } element={ <Homepage/> }/>
            </Routes>
          </Layout>
      </Router>
    </>
  )
}
