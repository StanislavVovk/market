import React, { FC } from 'react';
import { Modal } from 'react-bootstrap';
import style from './modal.module.css'

interface IModalComponentProps {
  show: boolean
  onHide: () => void
  children: React.ReactNode
}

export const ModalComponent: FC<IModalComponentProps> = ({ show, onHide, children }): JSX.Element => {
  return (
    <Modal
      show={show}
      onHide={onHide}
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
