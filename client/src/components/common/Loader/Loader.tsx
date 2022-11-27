import React from 'react';
import styles from './styles.module.css'

export const Loader: React.FC = (): JSX.Element => {
  return (
    <div className={ styles.loader }/>
  )
}
