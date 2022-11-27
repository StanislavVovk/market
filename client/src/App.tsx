import React from 'react';

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/common/Layout/Layout';

export const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Layout/>
        {/* <Route path={ '/' } element={ <Home/> }/> */ }
      </Router>
    </>
  )
}
