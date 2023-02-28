import { ServerEndpoints } from 'common/enums/endpoints/ServiceEndpoints'
import { auth, db } from '../firebase/firebase'
import { AddressService } from './address/address.service'
import { AuthService } from './auth/auth.service'
import { OrderService } from './order/order.service'

const Auth = new AuthService(auth)
const Address = new AddressService({
  db,
  collectionName: ServerEndpoints.ADDRESS
})
const Order = new OrderService({
  db, collectionName: ServerEndpoints.ORDERS
})

export { Auth, Address, Order }
