import { ServerEndpoints } from 'common/common'
import { auth, db } from '../firebase/firebase'
import { AddressService } from './address/address.service'
import { AuthService } from './auth/auth.service'
import { MenuService } from './menu/menu.service'
import { OrderService } from './order/order.service'

const Auth = new AuthService(auth)
const Address = new AddressService({
  db,
  collectionName: ServerEndpoints.ADDRESS
})
const Order = new OrderService({
  db,
  collectionName: ServerEndpoints.ORDERS
})
const Menu = new MenuService({
  db,
  collectionName: ServerEndpoints.MENU
})

export { Auth, Address, Order, Menu }
