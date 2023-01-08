import React from 'react';
import style from './styles.module.css'

interface ILoaderStyles {
  Loader: string
}

export const Loader: React.FC = (): JSX.Element => {
  const { Loader }: ILoaderStyles = style
  return (
    <div className={Loader}/>
  )
}
