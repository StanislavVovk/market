import React, { FC, useState } from 'react';
import {
  DEFAULT_LOGIN_PAYLOAD,
  LoginValidationSchema,
  useAppDispatch,
  useAppForm,
  UserPayloadKey
} from '../../../../common/common';
import style from '../sign.module.css';
import { InputComponent } from '../../Input/InputComponent';
import { Form } from 'react-bootstrap';
import { SubmitHandler } from 'react-hook-form';
import { IUserLoginData } from '../../../../common/models/UserModel/IUserCredential';
import { profileActionCreator } from '../../../../store/actions'
import { FirebaseError } from '@firebase/util';

export interface SignFormProps {
  onFormChange: () => void

}

export const SignInForm: FC<SignFormProps> = ({ onFormChange }): JSX.Element => {
  const { control, errors, handleSubmit, isValid } = useAppForm({
    mode: 'all',
    defaultValues: DEFAULT_LOGIN_PAYLOAD,
    validationSchema: LoginValidationSchema
  })
  const [errorMessage, setErrorMessage] = useState<FirebaseError>()
  const dispatch = useAppDispatch()
  const onLogin = (loginData: Record<keyof IUserLoginData, string>) => dispatch(profileActionCreator.loginUser(loginData))

  const handleLSignIn: SubmitHandler<Record<keyof IUserLoginData, string>> = async (values, event) => {
    event?.preventDefault()
    await onLogin(values)
      .unwrap()
      .catch((error: FirebaseError) => {
        setErrorMessage(error)
      })
  };

  return (
    <>
      <h2 className={`${style.ModalTitle} mb-5`}>
        <strong>
          Sign In to PizzaHub
        </strong>
      </h2>
      <div className={style.SocialButtons}>
      <span>
        <button/>
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
          signError={errorMessage && Object.keys(errorMessage).length !== 0}
        />
        <InputComponent
          name={UserPayloadKey.PASSWORD}
          type="password"
          placeholder="Enter password"
          control={control}
          errors={errors}
          labelText="Enter password"
          signError={errorMessage && Object.keys(errorMessage).length !== 0}
        />
        {errorMessage?.message ? <div> {errorMessage.message}</div> : null}
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
          onClick={() => onFormChange()}
        >
          Sign up
        </button>
      </div>
    </>
  )
};
