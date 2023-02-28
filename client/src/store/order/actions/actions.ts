import { FirebaseError } from '@firebase/util'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { OrderDataType } from 'common/models/OrderModel/OrderModel'
import { OrderService } from 'services/order/order.service'
import { OrderActionTypes } from './OrderActionTypes'

const placeOrder = createAsyncThunk<string, OrderDataType, { rejectWithValue: FirebaseError, extra: { services: { Order: OrderService } } }>(
  OrderActionTypes.SEND_ORDER,
  async (orderData, {
    rejectWithValue,
    extra: { services: { Order } }
  }) => {
    const { uid, order } = orderData
    return await Order.createOrder(uid, order)
      .then((message) => message)
      .catch((error) => rejectWithValue(error))
  }
)
export { placeOrder }
