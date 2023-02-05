import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IModalSliceInitialState {
  loginVisibility: boolean
  modalVisibility: boolean
}

const modalInitialState: IModalSliceInitialState = {
  loginVisibility: false,
  modalVisibility: false
}

export const modalSlice = createSlice({
  initialState: modalInitialState,
  name: 'modal',
  reducers: {
    showLogin: (state) => {
      state.loginVisibility = true
      state.modalVisibility = true
    },
    showRegistration: (state) => {
      state.loginVisibility = false
      state.modalVisibility = true
    },
    handleModal: (state, action: PayloadAction<boolean>) => {
      state.loginVisibility = !action.payload
    },
    hideModal: (state) => {
      state.modalVisibility = false
    }
  }
})
export const modalSliceAction = modalSlice.actions
export default modalSlice.reducer
