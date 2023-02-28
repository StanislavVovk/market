export const AddressActionTypes: Record<keyof IAddressActionTypes, string> = {
  ADD_ADDRESS: 'addressAction/addAddress',
  GET_ADDRESS: 'addressAction/getAddress',
  DELETE_ADDRESS: 'addressAction/deleteAddress'
}

export interface IAddressActionTypes {
  ADD_ADDRESS: string
  GET_ADDRESS: string
  DELETE_ADDRESS: string
}
