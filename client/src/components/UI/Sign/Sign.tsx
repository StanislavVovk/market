import React, { FC } from 'react'
import { useAppSelector } from 'common/common'
import { ModalComponent } from '../common'
import { SignInForm } from './SignIn/SignInForm'
import { SignUpForm } from './SignUp/SignUpForm'

export const Sign: FC = (): JSX.Element => {
  const { loginVisibility } = useAppSelector(state => state.modalReducer)
  return (
    <ModalComponent>
      {loginVisibility
        ? <SignInForm/>
        : <SignUpForm/>
      }
    </ModalComponent>
  )
}
