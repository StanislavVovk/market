import React, { FC } from 'react';
import style from './styles/menu.page.module.css'

export interface IMenuPageStyle {
  container: string
}

const { container }: IMenuPageStyle = style

export const Menu: FC = (): JSX.Element => {
  return (
    <div className={ `${container}` }>
    </div>
  )
}
