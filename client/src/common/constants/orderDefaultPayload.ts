import { AddressPayloadEnum } from '../enums/common'

export const OrderDefaultPayload = {
  [AddressPayloadEnum.BUILDING_NUMBER]: '',
  [AddressPayloadEnum.STREET_NAME]: '',
  [AddressPayloadEnum.CITY]: '',
  [AddressPayloadEnum.STATE]: '',
  [AddressPayloadEnum.COUNTRY]: '',
  [AddressPayloadEnum.ZIP_CODE]: ''
}
