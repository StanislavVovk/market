import { AuthUserMessages } from 'common/enums/messages/AuthUserMessages'
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

  async getSingleUserAddressData (uid: string) {
    return await this.getSingleDoc(uid)
      .then((addressData) => addressData as AddressUserModel
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
