import React, { FC } from 'react';

import style from '../../footer.module.css'
import { FooterHeaderEnum } from '../../../../../../../enums/footer.enum';
import IFooterStyle from '../../interfaces/footer';

const { HeaderText, Row, Link, SocialMediaBtn, Twitter, FaceBook, Instagram, YouTube }: IFooterStyle = style

export const Social: FC = (): JSX.Element => {
  return (
    <div className="col-lg-4 my-4">
      <h2 className={`text-center ${HeaderText}`}>
        { FooterHeaderEnum.Social }
      </h2>
      <div className={ Row }>
        <a className={ Link } href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className = {`${SocialMediaBtn} ${FaceBook}`} >
            <i className="fa-brands fa-facebook-f" aria-hidden="true"/>
          </div>
        </a>
        <a className={ Link } href="https://twitter.com/" target="_blank" rel="noopener noreferre r noreferrer">
          <div className={ `${SocialMediaBtn} ${Twitter}` }>
            <i className="fa-brands fa-twitter" aria-hidden="true"/>
          </div>
        </a>
        <a className={ Link } href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <div className={ `${SocialMediaBtn} ${Instagram}` }>
            <i className="fa-brands fa-instagram" aria-hidden="true"/>
          </div>
        </a>
        <a className={ Link } href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <div className={ `${SocialMediaBtn} ${YouTube}` }>
            <i className="fa-brands fa-youtube" aria-hidden="true"/>
          </div>
        </a>
      </div>
    </div>
  );
};
