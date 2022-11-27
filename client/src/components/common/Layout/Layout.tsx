import React from 'react';
import { Navigation } from './components/Header/Navbar/Navigation';
import { FooterElement } from './components/Footer/FooterElement';

export const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <Navigation/>
      <FooterElement/>
    </>
  )
}
