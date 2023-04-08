import type { FirebaseError } from '@firebase/util'
import { createAsyncThunk } from '@reduxjs/toolkit'
import type { MenuService } from 'services/menu/menu.service'
import { MenuItemModel } from 'common/common'
import { menuActionTypes } from './MenuActionTypes'

export const getMenu = createAsyncThunk<Array<Record<string, MenuItemModel>>, {}, {
  rejectWithValue: FirebaseError
  extra: { services: { Menu: MenuService } }
}>(
  menuActionTypes.GET_MENU,
  async (_, { rejectWithValue, extra: { services: { Menu } } }) => {
    return await Menu.getAllMenuItems()
      .then(items => {
        const menuData = items.map(item => item.data())
        return menuData as Array<Record<string, MenuItemModel>>
      })
      .catch(error => rejectWithValue(error))
  }
)
