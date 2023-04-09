import type { ValueOf } from 'helper/ValueOf'
import type { FC } from 'react'
import { Col, Spinner } from 'react-bootstrap'
import style from './styles.module.css'

interface LoaderStyle {
  LARGE?: 'lg'
  SMALL?: 'sm'
}

interface ILoaderProps {
  size?: ValueOf<LoaderStyle>
}
const CustomSpinner: FC<ILoaderProps> = ({ size }): JSX.Element => {
  if (size === 'lg') {
    return <Spinner className={style.lg}/>
  } else if (size === 'sm') {
    return <Spinner size={'sm'}/>
  }
  return <Spinner/>
}
export const Loader: FC<ILoaderProps> = ({ size }): JSX.Element => {
  return (
    <Col lg={12} className={`d-flex justify-content-center align-items-center ${style.Loader}`} >
      <CustomSpinner size={size}/>
    </Col>
  )
}
