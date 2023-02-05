import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { API_ENUM, FooterHeaderEnum } from '../../../../../../../common/common'
import style from '../../footer.module.css'

export const Legal: FC = (): JSX.Element => (
  <div className={`my-4 ${style.Holder}`}>
    <h2 className={style.HeaderText}>
      {FooterHeaderEnum.LEGAL}
    </h2>
    <div className={style.LinkContainer}>
      <Link to={API_ENUM.TERMS} className={style.NavLink}>
        TERMS & CONDITIONS
      </Link>
      <Link to={API_ENUM.PRIVACY} className={style.NavLink}>
        PRIVACY POLICY
      </Link>
      <Link to={API_ENUM.DISCLAIMER} className={style.NavLink}>
        DISCLAIMER
      </Link>
    </div>
  </div>
)
