import React, { FC } from 'react'
import style from './footer.module.css'
import IFooterStyle from './interfaces/footer';
import { Company, Legal, Social } from './components/common';

const { Footer, Row, CopyRightsText }: IFooterStyle = style

export const FooterElement: FC = (): JSX.Element => {
  return (
    <footer className={ `pt-4 pb-2 fixed-bottom ${Footer}` }>
      <div className="container">
        <div className={ 'row' }>
          <div className="col-lg-8 row">
            <Company/>
            <Legal/>
          </div>
          <Social/>
        </div>
        <div className={ `mb-2 ${Row}` }>
          <span className={ CopyRightsText }>
            Copyright © {new Date().getFullYear()} Tap FoodWorks Ltd. | All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  )
}
