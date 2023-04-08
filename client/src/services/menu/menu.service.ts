import { setDoc, doc } from '@firebase/firestore'
import type { IMenuItem, MenuItemModel } from 'common/common'
import { DatabaseService } from '../database/database.service'

export class MenuService extends DatabaseService<MenuItemModel> {
  // there is a huge mistake
  // we have to hardcode id of menu item, but in real cases dev need id autogeneration
  // in this case is too hard to do this
  // need to get all menu items of category and then find last item, get its id, set last_id + 1 to new item

  async createMenuItem (categoryName: string, menuItem: IMenuItem) {
    // todo create dropdown with category names when generate new item in frontend part
    const menuRef = doc(this._collectionRef, categoryName)
    const menuData = await this.getMenuCategoryItems(categoryName)
    if (menuData) {
      menuData[categoryName].push(menuItem)
      return await setDoc(menuRef, { [categoryName]: menuData })
        .then(() => {
          // todo create here response
          return 'Item created successfully'
        })
        .catch(e => {
          throw e
        })
    }
    const newMenuItem: MenuItemModel = { [categoryName]: [menuItem] }
    return await setDoc(menuRef, newMenuItem)
      .then(() => {
        // todo create response here
        return 'Item created successfully'
      })
      .catch(error => {
        throw error
      })
  }

  async getMenuCategoryItems (categoryName: string) {
    return await this.getSingleDoc(categoryName)
      .then((data) => {
        const menuData = data.data() as MenuItemModel | undefined
        return menuData ?? undefined
      })
      .catch(error => {
        throw error
      })
  }

  async getAllMenuItems () {
    return await this.getAllDocs()
      .then(data => data)
      .catch(error => {
        throw error
      })
  }
}
