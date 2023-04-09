
import { AuthUserMessages } from 'common/constants/messages/AuthUserMessages'
import { AddressUserModel } from 'common/models/AddressUser/AddressUserModel'
import { DatabaseService } from '../database/database.service'

class AddressService extends DatabaseService<AddressUserModel> {
  async getAllUsersAddressData () {
    return await this.getAllDocs()
      .then((addressData) => addressData)
      .catch((e) => {
        throw e
      })
  }

  async getSingleUserAddressData (uid: string): Promise<AddressUserModel> {
    return await this.getSingleDoc(uid)
      .then((data) => {
        const addressData = data.data()
        if (addressData) {
          return addressData as AddressUserModel
        }
        throw new Error('No address')
      }
      )
      .catch((e) => {
        throw e
      })
  }

  async setUserAddressData (addressData: AddressUserModel) {
    return await this.setDocumentData(addressData, addressData.uid)
      .then(() => AuthUserMessages.SUCCESSFULLY
      )
      .catch((e) => {
        throw e
      })
  }
}

export { AddressService }
