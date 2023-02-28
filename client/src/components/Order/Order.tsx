import { useAppSelector, API_ENUM } from 'common/common'
import { PageHeader } from 'components/UI/common'
import React, { FC } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import style from '../Menu/menu.module.css'
import { AddressComponent } from './components/Address/Address'
import { OrderModal } from './components/Modal/OrderModal'
import { PaymentMethodComponent } from './components/PaymentMethod/PaymentMethod'

export const Order: FC = (): JSX.Element => {
  const cart = useAppSelector(state => state.cartReducer.cart)

  return (
    <Container className={`mt-5 pt-5 ${style.MenuContainer}`}>
      <PageHeader pageName={'Checkout'} classNameProp={'mb-3'}/>
      <div className={'ms-4 mb-4'}>
      {
        cart.length === 0
          ? <Navigate to={API_ENUM.MENU}/>
          : <>
            <AddressComponent/>
            <PaymentMethodComponent/>
          </>
      }
        <OrderModal/>
      </div>
    </Container>
  )
}
