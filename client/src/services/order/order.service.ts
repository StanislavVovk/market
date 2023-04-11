import type { DocumentData } from '@firebase/firestore'
import { doc, setDoc, getDoc } from '@firebase/firestore'
import { OrderMessages } from 'common/common'
import type { OrderData } from 'common/common'
import { DatabaseService } from '../database/database.service'

export class OrderService extends DatabaseService<OrderData> {
  async createOrder (uid: string, orderData: OrderData) {
    const orderRef = doc(this._collectionRef, uid)
    const previousData = (await this.getOrder(uid)).data()
    if (previousData) {
      // magiiiiiiic, ya know
      previousData.orders.push(orderData)
      return await this.setDocumentData(previousData, uid)
        .then(() => {
          return OrderMessages.ORDER_SUCCESS
        })
        .catch(error => {
          throw error
        })
    }
    const newData = { orders: [orderData] }
    return await setDoc(orderRef, newData)
      .then(() => {
        return OrderMessages.ORDER_SUCCESS
      })
      .catch(error => {
        throw error
      })
  }

  async getOrder (uid: string): Promise<DocumentData> {
    const orderRef = doc(this._collectionRef, uid)
    return await getDoc(orderRef)
      .then(data => data)
      .catch(e => {
        throw e
      })
  }
}
