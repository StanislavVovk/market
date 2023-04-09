import type { OrderModel, OrderDataType, UserModel } from 'common/common'
import { useAppSelector, useAppDispatch, PaymentMethod } from 'common/common'
import { SectionHeader } from 'components/UI/common'
import type { FC, FormEvent, ChangeEvent } from 'react'
import { useState } from 'react'
import { Form, Button, FormCheck } from 'react-bootstrap'
import type { IAddress } from 'store/address/addressSlice'
import { placeOrder } from 'store/order/actions/actions'
import { orderActions } from 'store/order/orderSlice'

export const PaymentMethodComponent: FC = (): JSX.Element => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const user = useAppSelector(state => state.authReducer.user) as UserModel
  const cart = useAppSelector(state => state.cartReducer.cart)
  const address = useAppSelector(state => state.addressReducer.address) as IAddress
  const dispatch = useAppDispatch()
  const { uid } = user

  const onSendOrder = (data: OrderDataType) => dispatch(placeOrder(data))

  const handleSettingPaymentMethod = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(event.target.value)
  }

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

  return (
    <>
      <SectionHeader headerText={'Choose payment method'}/>
      <Form
        onSubmit={handleFormSubmit}>
        <FormCheck
          id="cash"
          type="radio"
          onChange={handleSettingPaymentMethod}
          name={PaymentMethod.PAYMENT_METHOD}
          label={PaymentMethod.CASH}
          value={PaymentMethod.CASH}
          required
        />
        <FormCheck
          id="wallet"
          type="radio"
          onChange={handleSettingPaymentMethod}
          name={PaymentMethod.PAYMENT_METHOD}
          label={PaymentMethod.WALLET}
          value={PaymentMethod.WALLET}
          required
        />
        <FormCheck
          id="card"
          type="radio"
          onChange={handleSettingPaymentMethod}
          name={PaymentMethod.PAYMENT_METHOD}
          label={PaymentMethod.CREDIT}
          value={PaymentMethod.CREDIT}
          required
        />
        <FormCheck
          id="netBanking"
          type="radio"
          onChange={handleSettingPaymentMethod}
          name={PaymentMethod.PAYMENT_METHOD}
          label={PaymentMethod.NET_BANKING}
          value={PaymentMethod.NET_BANKING}
          required
        />
        <Button className="mt-3" type={'submit'}>
          Place order
        </Button>
      </Form>
    </>
  )
}
