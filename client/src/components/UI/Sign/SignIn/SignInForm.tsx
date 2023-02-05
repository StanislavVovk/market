import {
  DEFAULT_LOGIN_PAYLOAD,
  LoginValidationSchema,
  UserPayloadKey,
  useAppDispatch,
  useAppForm,
  useAppSelector
} from 'common/common'
import { UserAuthData } from 'common/models/UserModel/IUserCredential'

import { InputComponent } from 'components/UI/Input/InputComponent'
import React, { FC } from 'react'
import { Form } from 'react-bootstrap'
import { SubmitHandler } from 'react-hook-form'
import { modalActionCreator, profileActionCreator } from 'store/actions'
import { authSlice } from 'store/auth/authSlice'
import style from '../sign.module.css'

export const SignInForm: FC = (): JSX.Element => {
  const {
    control,
    errors,
    handleSubmit,
    isValid
  } = useAppForm({
    mode: 'all',
    defaultValues: DEFAULT_LOGIN_PAYLOAD,
    validationSchema: LoginValidationSchema
  })
  const dispatch = useAppDispatch()
  const errorMessage = useAppSelector(state => state.authReducer.error)
  const loginStatus = useAppSelector(state => state.modalReducer.loginVisibility)
  const handleModalChange = () => {
    void dispatch(authSlice.actions.clearError())
    return dispatch(modalActionCreator.handleModal(loginStatus))
  }
  const onLogin = (loginData: Record<keyof UserAuthData, string>) => dispatch(profileActionCreator.loginUser(loginData))

  const handleLSignIn: SubmitHandler<Record<keyof UserAuthData, string>> = async (values, event) => {
    event?.preventDefault()
    await onLogin(values)
      .unwrap()
      .then(() => {
        dispatch(modalActionCreator.hideModal())
      })
  }

  return (
    <>
      <h2 className={`${style.ModalTitle} mb-5`}>
        <strong>
          Sign In to PizzaHub
        </strong>
      </h2>
      <div className={style.SocialButtons}>
      <span>

       </span>
        <div className={`${style.Divider}`}>
          or
        </div>
      </div>
      <Form
        autoComplete={'on'}
        name={'signInForm'}
        onSubmit={handleSubmit(handleLSignIn)}
      >
        <InputComponent
          name={UserPayloadKey.EMAIL}
          type="email"
          placeholder="Enter email"
          control={control}
          errors={errors}
          labelText="Enter email"
        />
        <InputComponent
          name={UserPayloadKey.PASSWORD}
          type="password"
          placeholder="Enter password"
          control={control}
          errors={errors}
          labelText="Enter password"
        />
        {errorMessage
          ? <div>{errorMessage}</div>
          : null}
        <div className="d-flex justify-content-center">
          <button
            disabled={!isValid}
            type="submit"
            className={style.SubmitButton}
          >
            Sign up
            with email
          </button>
        </div>
      </Form>
      <div className={`d-flex justify-content-center align-items-center mt-4 ${style.Suggestion}`}>
        New to PizzaHub?
        <button
          className={`ms-1 ${style.SuggestionButton}`}
          onClick={() => handleModalChange()}
        >
          Sign up
        </button>
      </div>
    </>
  )
}
