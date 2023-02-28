import { useAppSelector } from 'common/common'
import { SectionHeader, AddressForm, FilledAddressForm } from 'components/UI/common'
import React, { FC } from 'react'

export const AddressComponent: FC = (): JSX.Element => {
  const {
    address,
    updateStatus
  } = useAppSelector(state => state.addressReducer)
  return (
    <>
      <SectionHeader headerText={'Location'}/>
      {address && updateStatus ? <FilledAddressForm/> : <AddressForm/>}
    </>
  )
}
