import { useAppSelector, useAppDispatch } from 'common/common'
import { OrderModel, OrderDataType } from 'common/models/OrderModel/OrderModel'
import { UserModel } from 'common/models/UserModel/AuthUserModel'
import { SectionHeader } from 'components/UI/common'
import React, { FC, useState, FormEvent } from 'react'
import { Form, Button, FormCheck } from 'react-bootstrap'
import { IAddress } from 'store/address/addressSlice'
import { placeOrder } from 'store/order/actions/actions'
import { orderActions } from '../../../../store/order/orderSlice'

export const PaymentMethodComponent: FC = (): JSX.Element => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const user = useAppSelector(state => state.authReducer.user) as UserModel
  const cart = useAppSelector(state => state.cartReducer.cart)
  const address = useAppSelector(state => state.addressReducer.address) as IAddress
  const dispatch = useAppDispatch()
  const { uid } = user

  const onSendOrder = (data: OrderDataType) => dispatch(placeOrder(data))

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const order: OrderModel = {
      cart,
      address,
      paymentMethod,
      time: new Date()
    }
    const currentTime = new Date().getTime()
    const fullOrderData: OrderDataType = {
      order: { [currentTime]: order },
      uid
    }
    event.preventDefault()
    await onSendOrder(fullOrderData)
      .then(() => {
        dispatch(orderActions.changeModalVisibility())
      })
  }
  // fixme find solution of type mismatch
  return (
    <>
      <SectionHeader headerText={'Choose payment method'}/>
      <Form
        onSubmit={handleFormSubmit}>
        <FormCheck
          type="radio"
          // @ts-expect-error
          onClick={(event) => setPaymentMethod(event.target.labels[0].outerText)}
          name={'paymentMethod'}
          id="cash"
          label={'Cash on delivery'}
          required
        />
        <FormCheck
          required
          type="radio"
          // @ts-expect-error
          onClick={(event) => setPaymentMethod(event.target.labels[0].outerText)}
          name={'paymentMethod'}
          id="wallet"
          label={'Wallet'}
        />
        <FormCheck
          required
          type="radio"
          // @ts-expect-error
          onClick={(event) => setPaymentMethod(event.target.labels[0].outerText)}
          name={'paymentMethod'}
          id="card"
          label={'Credit/Debit card'}
        />
        <FormCheck
          type="radio"
          required
          // @ts-expect-error
          onClick={(event) => setPaymentMethod(event.target.labels[0].outerText)}
          name={'paymentMethod'}
          id="netBanking"
          label={'Net banking'}
        />
        <Button className="mt-3" type={'submit'}>
          Place order
        </Button>
      </Form>
    </>
  )
}
