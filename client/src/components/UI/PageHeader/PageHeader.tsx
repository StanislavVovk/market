import React, { FC } from 'react'
import style from './pageheader.module.css'

interface PageHeaderProps {
  pageName: string
  classNameProp?: string
}

export const PageHeader: FC<PageHeaderProps> = ({
  pageName,
  classNameProp
}): JSX.Element => {
  return (
    <div className={classNameProp ?? ''}>
      <h1 className="display-6 mb-0">
        <strong className={style.Title}>{pageName}</strong>
      </h1>
      <div className={style.TitleLine}/>
    </div>
  )
}
