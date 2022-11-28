import React from 'react';
import { Navigation } from './components/Header/Navbar/Navigation';
import { FooterElement } from './components/Footer/FooterElement';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <>
      <Navigation/>
      { props.children }
      <FooterElement/>
    </>
  )
}
