import React, { FC } from 'react'
import style from '../../footer.module.css'
import { API_ENUM, FooterHeaderEnum } from '../../../../../../../common/common';
import { Link } from 'react-router-dom';

export const Legal: FC = (): JSX.Element => {
  return (
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
  );
};
