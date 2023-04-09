import { useAppDispatch } from 'common/common'
import type { FC } from 'react'
import { Alert, Button, Col } from 'react-bootstrap'
import { addressActions } from 'store/address/addressSlice'
import { AddressLabel } from '../AddressLabel/AddressLabel'

export const FilledAddressForm: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const handleUpdateAddress = () => {
    dispatch(addressActions.changeUpdateStatus())
  }

  return (
    <div className="d-flex flex-column mb-3">
      <Alert variant={'success'}>
        <Alert.Heading>Billing address</Alert.Heading>
        <AddressLabel/>
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
