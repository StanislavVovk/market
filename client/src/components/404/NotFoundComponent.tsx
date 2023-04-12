import { API_ENUM } from 'common/common'
import type { FC } from 'react'
import { Container, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import style from './notFound.module.css'

export const NotFoundComponent: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const handleButtonClick = () => navigate(API_ENUM.HOME)
  return (
    <Container className={'vh-100 mt-5 pt-5'}>
      <Col>
        <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
          <p className='fs-1 fw-bold'>
            Uh-Oh...
          </p>
          <p className='fs-3 text-center'>The page you are looking for may have been moved, deleted or possibly never existed</p>
          <p className={style.e404}>404</p>
          <Button
            style={{ backgroundColor: '#724cf9' }}
            onClick={handleButtonClick}
          >Link to home
          </Button>
        </div>

      </Col>
    </Container>
  )
}
