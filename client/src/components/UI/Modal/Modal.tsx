import { modalActionCreator } from 'store/actions'
import style from './modal.module.css'
import React, { FC } from 'react'
import { Modal } from 'react-bootstrap';
import { useAppSelector, useAppDispatch } from 'common/common'

interface IModalComponentProps {
  children: React.ReactNode
}

export const ModalComponent: FC<IModalComponentProps> = ({ children }): JSX.Element => {
  const { modalVisibility } = useAppSelector(state => state.modalReducer)
  const dispatch = useAppDispatch()
  const handleModalClose = () => dispatch(modalActionCreator.hideModal())
  return (
    <Modal
      show={modalVisibility}
      onHide={handleModalClose}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className={style.ModalTop} closeButton/>
      <Modal.Body className={style.ModalBody}>
        {children}
      </Modal.Body>
    </Modal>
  );
}
