import React, { FC } from 'react';
import { ModalComponent } from '../Modal/Modal';
import { SignInForm } from './SignIn/SignInForm';
import { SignUpForm } from './SignUp/SignUpForm';

interface ISignProps {
  login: boolean
  showModal: boolean
  onHideModal: () => void
  onModalChange: () => void
}

export const Sign: FC<ISignProps> = ({
  login,
  showModal,
  onHideModal,
  onModalChange
}):
JSX.Element => {
  return (
    <ModalComponent
      show={showModal}
      onHide={onHideModal}>
      {login
        ? <SignInForm onFormChange={onModalChange}/>
        : <SignUpForm onFormChange={onModalChange}/>
      }
    </ModalComponent>
  );
};
