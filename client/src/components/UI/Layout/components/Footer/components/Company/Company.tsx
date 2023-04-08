import { API_ENUM, FooterHeaderEnum, FooterLinkEnum } from 'common/common';
import style from '../../footer.module.css'
import React, { FC } from 'react'
import { Link } from 'react-router-dom';

export const Company: FC = (): JSX.Element =>
  // TODO create link component
  (
    <div className={`my-4 ${style.Holder}`}>
      <h2 className={style.HeaderText}>{FooterHeaderEnum.COMPANY}</h2>
      <div className={style.LinkContainer}>

        <Link to={API_ENUM.ABOUT} className={style.NavLink}>
          {FooterLinkEnum.About}
        </Link>
        <Link to={API_ENUM.FAQ} className={style.NavLink}>
          {FooterLinkEnum.FAQ}
        </Link>
        <Link to={'mailto:404-mail@email.com'} className={style.NavLink}>
          {FooterLinkEnum.Contact}
        </Link>
      </div>
    </div>
  )
;
