import React, { FC } from 'react'
import { Navigation, FooterElement } from './components/common'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => (
  <>
    <Navigation/>
    {children}
    <FooterElement/>
  </>
)
