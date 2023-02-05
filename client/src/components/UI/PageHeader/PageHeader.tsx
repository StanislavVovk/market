import style from './pageheader.module.css'
import React, { FC } from 'react'

interface PageHeaderProps {
  pageName: string
}

export const PageHeader: FC<PageHeaderProps> = ({ pageName }): JSX.Element => (
    <>
      <h1 className="display-6 mb-0">
        <strong className={style.Title}>{pageName}</strong>
      </h1>
      <div className={style.TitleLine}/>
    </>
);
