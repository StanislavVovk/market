import { useAppSelector } from 'common/common'
import type { FC } from 'react'
import type { IAddress } from 'store/address/addressSlice'

export const AddressLabel: FC = (): JSX.Element => {
  const {
    address
  } = useAppSelector(state => state.addressReducer)
  const {
    state,
    city,
    country,
    buildingNumber,
    streetName,
    zipCode
  } = address as IAddress
  return (
    <>
      <hr/>
      <p>Building number: <strong>{buildingNumber}</strong></p>
      <p>Street name: <strong>{streetName}</strong></p>
      <p>City: <strong>{city}</strong></p>
      <p>State: <strong>{state}</strong></p>
      <p>Country: <strong>{country}</strong></p>
      <p>Zip code: <strong>{zipCode}</strong></p>
    </>
  )
}
