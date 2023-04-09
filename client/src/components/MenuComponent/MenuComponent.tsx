import { useAppDispatch, useAppSelector, MenuItemModel } from 'common/common'
import { PageHeader, Loader } from 'components/UI/common'
import type { FC } from 'react'
import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Menu } from 'services/services'
import { getMenu } from 'store/menu/actions/actions'

import { Cart, DishesWrapper } from './components/common'
import style from './menu.module.css'

export const MenuComponent: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const menuState = useAppSelector(state => state.menuReducer)
  useEffect(() => {
    void dispatch(getMenu({}))
  }, [dispatch])

  return (
    <Container className={`mt-5 pt-5 mb-5 ${style.MenuContainer}`}>
      <PageHeader pageName={'Menu'}/>
      <Row className={'mt-4'}>
        {menuState.isLoading
          ? <Loader size={'lg'}/>
          : <>
            <Col lg={8}>
              {menuState.menuData.map((item: Record<string, MenuItemModel>, index: number) => {
                const header = Object.keys(item)[0]
                const menuData = item[header]
                return <DishesWrapper key={index} headerText={header} menuItemsData={menuData}/>
              })}
            </Col>
            <Col lg={4} className="mb-5">
              <Cart/>
            </Col>
          </>
        }
      </Row>
    </Container>
  )
}
