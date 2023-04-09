import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useAppSelector, useAppDispatch, API_ENUM } from 'common/common'
import { useNavigate } from 'react-router-dom'
import { orderActions } from 'store/order/orderSlice'
import { cartActions } from '../../../../store/cart/cartSlice'
import style from './modal.module.css'
export const OrderModal: FC = (): JSX.Element => {
  const modal = useAppSelector(state => state.orderReducer.modalVisibility)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleModalClose = () => {
    dispatch(orderActions.changeModalVisibility())
    navigate(API_ENUM.HOME)
    dispatch(cartActions.clearCart())
  }
  return (
    <Modal
      show={modal}
      onHide={handleModalClose}
      size='sm'
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className={`d-flex align-items-center justify-content-center flex-column ${style.Modal}`}>
        <div className='d-flex justify-content-center align-items-center flex-column h-100'>
          <i className={'fa fa-truck-fast fa-2xl mb-5'}></i>
          <p>Your order will arrive soon</p>
        </div>
        <Button className={style.Button}
        onClick={handleModalClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  )
}
