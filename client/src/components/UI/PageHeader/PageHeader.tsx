import React, { FC } from 'react';
import style from './pageheader.module.css'

interface PageHeaderProps {
  pageName: string
}

export const PageHeader: FC<PageHeaderProps> = ({ pageName }): JSX.Element => {
  return (
    <>
      <h1 className="display-6 mb-0">
        <strong className={style.Title}>{pageName}</strong>
      </h1>
      <div className={style.TitleLine}/>
    </>
  );
};
