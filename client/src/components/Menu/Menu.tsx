import React, { FC } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PageHeader, DishCard } from '../UI/common'
import { Cart } from './components/common'
import style from './menu.module.css'

export interface IDishCardProps {
  description: string
  id: number
  imageURL: string
  name: string
  price: number
  quantity?: number
}

export const Menu: FC = (): JSX.Element => {
  const item1: IDishCardProps = {
    id: 1,
    name: 'Cool pizza',
    description: '1',
    price: 12,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  const item2: IDishCardProps = {
    id: 2,
    name: 'The best pizza',
    description: '2',
    price: 13,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  const item3: IDishCardProps = {
    id: 3,
    name: 'The best pizza',
    description: '2',
    price: 13,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  const item4: IDishCardProps = {
    id: 4,
    name: 'The best pizza',
    description: '2',
    price: 13,
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/pizza-man-61510.appspot.com/o/img%2FFarmhouse.webp?alt=media&token=7d776979-1a68-4c22-9679-66c9d82fb439'
  }
  return (
    <Container className={`mt-5 pt-5 ${style.MenuContainer}`}>
      <PageHeader pageName={'Menu'}/>
      <Row>
        <Col lg={8}>
          <div className="my-4">
            <DishCard item={item1}/>
            <DishCard item={item2}/>
            <DishCard item={item3}/>
            <DishCard item={item4}/>
          </div>
        </Col>
        <Col lg={4} className="mb-5">
          <Cart/>
        </Col>
      </Row>
    </Container>
  )
}
