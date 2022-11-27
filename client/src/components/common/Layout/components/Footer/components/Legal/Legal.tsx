import React, { FC } from 'react'
import style from '../../footer.module.css'
import { API_ENUM } from '../../../../../../../enums/api.enum';
import { Link } from 'react-router-dom';
import IFooterStyle from '../../interfaces/footer';
import { FooterHeaderEnum } from '../../../../../../../enums/footer.enum';

const { HeaderText, LinkContainer, NavLink, Holder }: IFooterStyle = style

export const Legal: FC = (): JSX.Element => {
  return (
    <div className={ `my-4 ${Holder}` }>
      <h2 className={ HeaderText }>
        {FooterHeaderEnum.Legal}
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
