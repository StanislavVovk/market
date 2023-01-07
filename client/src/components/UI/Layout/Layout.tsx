import React, { FC } from 'react';
import { Navigation } from './components/Header/Navbar/Navigation';
import { FooterElement } from './components/Footer/FooterElement';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Navigation/>
      {children}
      <FooterElement/>
    </>
  )
}
