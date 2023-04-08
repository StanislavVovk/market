import type { FC } from 'react';
import { SectionHeader, DishCard } from 'components/UI/common'
import { MenuItemModel } from 'common/common'

interface IDishesWrapperProps {
  headerText: string
  menuItemsData: MenuItemModel
}

export const DishesWrapper: FC<IDishesWrapperProps> = ({
  headerText, menuItemsData
}): JSX.Element => {
  return (
    <div className='ms-4'>
      <SectionHeader headerText={headerText}/>
      {menuItemsData[headerText].map((menuItem, index) => <DishCard item={menuItem}
                                                                       key={index}/>)}
    </div>
  )
}
