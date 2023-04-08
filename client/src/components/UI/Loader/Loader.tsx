import { Col, Spinner } from 'react-bootstrap'
import type { FC } from 'react'
import { ValueOf } from 'common/models/MenuItemModel/IMenuItem'
import style from './styles.module.css'
interface LoaderStyle {
  LARGE?: 'lg'
  SMALL?: 'sm'
}
interface ILoaderProps {
  size?: ValueOf<LoaderStyle>
}
export const Loader: FC<ILoaderProps> = ({ size }): JSX.Element => {
  // todo find a way to create normal size matcher
  return (
    <Col lg={12} className={'d-flex justify-content-center align-items-center'}>
      <Spinner className={`${size === 'lg' ? style.lg : 'sm'}`}/>
    </Col>
  )
}
