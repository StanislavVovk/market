import React, { FC } from 'react';
import { FooterHeaderEnum } from '../../enums/footer.enum';
import style from '../../footer.module.css';

export const Social: FC = (): JSX.Element => {
  return (
    <div className="col-lg-4 my-4">
      <h2 className={`text-center ${style.HeaderText}`}>
        {FooterHeaderEnum.SOCIAL}
      </h2>
      <div className={style.Row}>
        <a className={style.Link} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <div className={`${style.SocialMediaBtn} ${style.FaceBook}`}>
            <i className="fa-brands fa-facebook-f" aria-hidden="true"/>
          </div>
        </a>
        <a className={style.Link} href="https://twitter.com/" target="_blank" rel="noopener noreferre r noreferrer">
          <div className={`${style.SocialMediaBtn} ${style.Twitter}`}>
            <i className="fa-brands fa-twitter" aria-hidden="true"/>
          </div>
        </a>
        <a className={style.Link} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <div className={`${style.SocialMediaBtn} ${style.Instagram}`}>
            <i className="fa-brands fa-instagram" aria-hidden="true"/>
          </div>
        </a>
        <a className={style.Link} href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <div className={`${style.SocialMediaBtn} ${style.YouTube}`}>
            <i className="fa-brands fa-youtube" aria-hidden="true"/>
          </div>
        </a>
      </div>
    </div>
  );
};
