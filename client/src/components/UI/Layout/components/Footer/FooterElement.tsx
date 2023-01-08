import React, { FC } from 'react'
import style from './footer.module.css'
import { Company, Legal, Social } from './components/common';

export default interface IFooterStyle {
  CopyRightsText: string
  FaceBook: string
  Footer: string
  HeaderText: string
  Holder: string
  Instagram: string
  Link: string
  LinkContainer: string
  NavLink: string
  NavLinkActive: string
  Row: string
  SocialMediaBtn: string
  Twitter: string
  YouTube: string
}

const { Footer, Row, CopyRightsText }: IFooterStyle = style

export const FooterElement: FC = (): JSX.Element => {
  return (
    <footer className={`pt-4 pb-2 ${Footer}`}>
      <div className="container">
        <div className={'row'}>
          <div className="col-lg-8 row">
            <Company/>
            <Legal/>
          </div>
          <Social/>
        </div>
        <div className={`mb-2 ${Row}`}>
          <span className={CopyRightsText}>
            Copyright © {new Date().getFullYear()} Tap FoodWorks Ltd. | All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
