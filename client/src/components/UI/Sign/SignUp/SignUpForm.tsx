import React, { FC } from 'react';
import {
  DEFAULT_SIGNUP_PAYLOAD,
  SignUpValidation,
  useAppForm,
  UserPayloadKey
} from '../../../../common/common';
import { InputComponent } from '../../Input/InputComponent';
import style from '../sign.module.css'
import { SignFormProps } from '../SignIn/SignInForm';
import { Form } from 'react-bootstrap';
import { SubmitHandler } from 'react-hook-form';
import { IUserRegistrationData } from '../../../../common/models/UserModel/IUserCredential';

export const SignUpForm: FC<SignFormProps> = ({ onFormChange }): JSX.Element => {
  const { control, errors, handleSubmit, isDirty } = useAppForm({
    mode: 'all',
    defaultValues: DEFAULT_SIGNUP_PAYLOAD,
    validationSchema: SignUpValidation
  })
  const handleLSignUp: SubmitHandler<Record<keyof IUserRegistrationData, string>> = async (values, event) => {
    event?.preventDefault()
  };
  return (
    <>
      <h2 className={`${style.ModalTitle} mb-5`}>
        <strong>
          Sign up to PizzaHub
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
        name={'signUpForm'}
        onSubmit={handleSubmit(handleLSignUp)}
      >
        <InputComponent
          name={UserPayloadKey.USERNAME}
          type="text"
          placeholder="Enter username"
          control={control}
          errors={errors}
          labelText="Enter username"
        />
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
        <InputComponent
          name={UserPayloadKey.REPEAT_PASSWORD}
          type="password"
          placeholder="Repeat password"
          control={control}
          errors={errors}
          labelText="Repeat password"
        />
        <div className="d-flex justify-content-center">
          <button
            disabled={!(Object.keys(errors).length === 0 && isDirty)}
            type="submit"
            className={style.SubmitButton}
          >
            Sign up with email
          </button>
        </div>
      </Form>
      <div className={`d-flex justify-content-center align-items-center mt-4 ${style.Suggestion}`}>
        Got an account already?
        <button
          className={`ms-1 ${style.SuggestionButton}`}
          onClick={() => onFormChange()}
        >
          Log in
        </button>
      </div>
    </>
  )
}
