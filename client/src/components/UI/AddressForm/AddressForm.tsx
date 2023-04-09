import { User } from '@firebase/auth'
import {
  OrderDefaultPayload,
  OrderValidationSchema,
  useAppForm,
  AddressPayloadEnum,
  useAppDispatch,
  useAppSelector
} from 'common/common'
import { AddressUserModel } from 'common/models/AddressUser/AddressUserModel'
import React, { FC } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { SubmitHandler } from 'react-hook-form'
import { addUsersAddress } from 'store/actions'
import { addressActions, IAddress } from 'store/address/addressSlice'
import { InputComponent } from '../Input/InputComponent'

export const AddressForm: FC = (): JSX.Element => {
  const user = useAppSelector(state => state.authReducer.user) as User
  const {
    address
  } = useAppSelector(state => state.addressReducer)
  const {
    control,
    errors,
    handleSubmit
  } = useAppForm({
    mode: 'all',
    defaultValues: (!address ? OrderDefaultPayload : address),
    validationSchema: OrderValidationSchema
  })
  const dispatch = useAppDispatch()
  const saveAddressData = (addressData: AddressUserModel) => dispatch(addUsersAddress(addressData))

  const changeUpdateStatus = () => {
    dispatch(addressActions.changeUpdateStatus())
  }
  const handleCancelButtonClick = () => {
    changeUpdateStatus()
  }
  const handleFormSubmit: SubmitHandler<Record<keyof IAddress, string>> = async (values) => {
    const { uid } = user
    const addressData: AddressUserModel = {
      uid,
      userAddress: values
    }
    await saveAddressData(addressData)
      .unwrap()
      .then(() => {
        changeUpdateStatus()
      })
  }
  return (
      <Col lg={6} className={'mb-4'}>
          <Form
            autoComplete={'on'}
            name={'addressForm'}
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <InputComponent
              name={AddressPayloadEnum.BUILDING_NUMBER}
              control={control}
              errors={errors}
              labelText={'Building Number'}
              placeholder={'Building Number'}
              className={'mb-3'}
            />
            <InputComponent
              name={AddressPayloadEnum.STREET_NAME}
              control={control}
              errors={errors}
              labelText={'Street name'}
              placeholder={'Street name'}
              className={'mb-3'}
            />
            <InputComponent
              name={AddressPayloadEnum.CITY}
              control={control}
              errors={errors}
              labelText={'City'}
              placeholder={'City'}
              className={'mb-3'}
            />
            <InputComponent
              name={AddressPayloadEnum.STATE}
              control={control}
              errors={errors}
              labelText={'State'}
              placeholder={'State'}
              className={'mb-3'}
            />
            <InputComponent
              name={AddressPayloadEnum.COUNTRY}
              control={control}
              errors={errors}
              labelText={'Country'}
              placeholder={'Country'}
              className={'mb-3'}
            />
            <InputComponent
              name={AddressPayloadEnum.ZIP_CODE}
              control={control}
              errors={errors}
              labelText={'ZIP-code'}
              placeholder={'ZIP-code'}
              className={'mb-3'}
            />
            <Row>
              <Col>
                <Button
                  variant={'danger'}
                  onClick={handleCancelButtonClick}>
                  Cancel
                </Button>
              </Col>
              <Col className='d-flex justify-content-end'>
                <Button
                  onClick={handleSubmit(handleFormSubmit)}>
                  Save address data
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
  )
}
