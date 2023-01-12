import React, { FC } from 'react'
import style from '../../footer.module.css'
import { Link } from 'react-router-dom';
import { API_ENUM } from '../../../../../../../common/enums/api.enum';
import { FooterHeaderEnum, FooterLinkEnum } from '../../enums/footer.enum';

export const Company: FC = (): JSX.Element => {
  // TODO create link component
  return (
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
  );
};
