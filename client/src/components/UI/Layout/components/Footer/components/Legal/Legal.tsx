import React, { FC } from 'react'
import style from '../../footer.module.css'
import { API_ENUM } from '../../../../../../../enums/api.enum';
import { Link } from 'react-router-dom';
import { FooterHeaderEnum } from '../../enums/footer.enum';
import IFooterStyle from '../../FooterElement';

const { HeaderText, LinkContainer, NavLink, Holder }: IFooterStyle = style

export const Legal: FC = (): JSX.Element => {
  return (
    <div className={`my-4 ${Holder}`}>
      <h2 className={HeaderText}>
        {FooterHeaderEnum.LEGAL}
      </h2>
      <div className={LinkContainer}>
        <Link to={API_ENUM.TERMS} className={NavLink}>
          TERMS & CONDITIONS
        </Link>
        <Link to={API_ENUM.PRIVACY} className={NavLink}>
          PRIVACY POLICY
        </Link>
        <Link to={API_ENUM.DISCLAIMER} className={NavLink}>
          DISCLAIMER
        </Link>
      </div>
    </div>
  );
};
