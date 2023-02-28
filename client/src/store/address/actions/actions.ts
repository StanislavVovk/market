import { FirebaseError } from '@firebase/util'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AddressUserModel } from 'common/models/AddressUser/AddressUserModel'
import { AddressService } from 'services/address/address.service'
import { AddressActionTypes } from './AddressActionTypes'

const getUserAddress = createAsyncThunk<AddressUserModel, string, { rejectWithValue: FirebaseError, extra: { services: { Address: AddressService } } }>(
  AddressActionTypes.GET_ADDRESS,
  async (uid,
    {
      rejectWithValue,
      extra: { services: { Address } }
    }
  ) => {
    return await Address.getSingleUserAddressData(uid)
      .then((addressData) => addressData)
      .catch((e) => rejectWithValue(e))
  }
)

const addUsersAddress = createAsyncThunk<AddressUserModel, AddressUserModel, { rejectWithValue: FirebaseError, extra: { services: { Address: AddressService } } }>(
  AddressActionTypes.ADD_ADDRESS,
  async (addressUserData, {
    rejectWithValue,
    extra: { services: { Address } }
  }) => {
    return await Address.setUserAddressData(addressUserData)
      .then(() => addressUserData)
      .catch(e => rejectWithValue(e))
  }
)

const deleteUsersAddress = createAsyncThunk(
  AddressActionTypes.DELETE_ADDRESS,
  async () => {
  }
)
export { addUsersAddress, getUserAddress }
