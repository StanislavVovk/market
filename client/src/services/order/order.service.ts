import { doc, collection, setDoc } from '@firebase/firestore'
import { OrderData } from 'common/models/OrderModel/OrderModel'
import { OrderMessages } from 'common/enums/messages/OrderMessages'
import { DatabaseService } from '../database/database.service'

export class OrderService extends DatabaseService<OrderData> {
  async createOrder (uid: string, orderData: OrderData) {
    const orderRef = doc(this._collectionRef, uid)
    const itemRef = doc(collection(orderRef, Object.keys(orderData)[0]), 'order')
    return await setDoc(itemRef, orderData)
      .then(() => {
        return OrderMessages.ORDER_SUCCESS
      })
      .catch(error => {
        throw error
      })
  }
}
