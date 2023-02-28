import { useAppSelector, useAppDispatch } from 'common/common'
import React, { FC } from 'react'
import { Alert, Button, Col } from 'react-bootstrap'
import { addressActions, IAddress } from 'store/address/addressSlice'

export const FilledAddressForm: FC = (): JSX.Element => {
  const {
    address
  } = useAppSelector(state => state.addressReducer)

  const dispatch = useAppDispatch()
  const handleUpdateAddress = () => {
    dispatch(addressActions.changeUpdateStatus())
  }
  const {
    state,
    city,
    country,
    buildingNumber,
    streetName,
    zipCode
  } = address as IAddress
  // todo create component from this
  return (
    <div className="d-flex flex-column mb-3">
      <Alert variant={'success'}>
        <Alert.Heading>Billing address</Alert.Heading>
        <hr/>
        <p>Building number: <strong>{buildingNumber}</strong></p>
        <p>Street name: <strong>{streetName}</strong></p>
        <p> City: <strong>{city}</strong></p>
        <p> State: <strong>{state}</strong></p>
        <p>Country: <strong>{country}</strong></p>
        <p>Zip code: <strong>{zipCode}</strong></p>
      </Alert>
      <Col>
        <Button
          onClick={handleUpdateAddress}>
          Change data
        </Button>
      </Col>
    </div>
  )
}
