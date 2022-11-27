import React, { FC } from 'react'
import style from '../../footer.module.css'

import { Link } from 'react-router-dom';
import { API_ENUM } from '../../../../../../../enums/api.enum';
import IFooterStyle from '../../interfaces/footer';
import { FooterHeaderEnum, FooterLinkEnum } from '../../../../../../../enums/footer.enum';

const { HeaderText, Holder, LinkContainer, NavLink }: IFooterStyle = style

export const Company: FC = (): JSX.Element => {
  return (
    <div className={ `my-4 ${Holder}` }>
      <h2 className={ HeaderText }>{ FooterHeaderEnum.Company }</h2>
      <div className={ LinkContainer }>
        <Link to={ API_ENUM.ABOUT } className={ NavLink }>
          { FooterLinkEnum.About }
        </Link>
        <Link to={ API_ENUM.FAQ } className={ NavLink }>
          { FooterLinkEnum.FAQ }
        </Link>
        <Link to={ 'mailto:404-mail@email.com' } className={ NavLink }>
          { FooterLinkEnum.Contact }
        </Link>
      </div>
    </div>
  );
};
