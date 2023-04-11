import {
  DEFAULT_SIGNUP_PAYLOAD,
  SignUpValidation,
  useAppDispatch,
  useAppForm,
  useAppSelector,
  UserPayloadKey
} from 'common/common'
import { IUserAuthData } from 'common/models/UserAuth/IUserCredential'
import { InputComponent } from 'components/UI/common'
import type { FC } from 'react'
import { Form } from 'react-bootstrap'
import { SubmitHandler } from 'react-hook-form'
import { modalActionCreator, profileActionCreator } from 'store/actions'
import { authSlice } from 'store/auth/authSlice'
import { GoogleSign } from '../GoogleSign/GoogleOA'
import style from '../sign.module.css'

export const SignUpForm: FC = (): JSX.Element => {
  const {
    control,
    errors,
    handleSubmit,
    isDirty
  } = useAppForm({
    mode: 'all',
    defaultValues: DEFAULT_SIGNUP_PAYLOAD,
    validationSchema: SignUpValidation
  })

  const dispatch = useAppDispatch()
  const loginStatus = useAppSelector(state => state.modalReducer.loginVisibility)

  const handleModalChange = () => {
    void dispatch(authSlice.actions.clearError())
    return dispatch(modalActionCreator.handleModal(loginStatus))
  }

  const onSignUp = (values: Record<keyof IUserAuthData, string>) => {
    const {
      username,
      email,
      password
    } = values

    const regData = dispatch(profileActionCreator.registerUser({
      email,
      password
    }))
    void dispatch(profileActionCreator.setUsername({ username }))
    return regData
  }

  const handleLSignUp: SubmitHandler<Record<keyof IUserAuthData, string>> = async (values, event) => {
    event?.preventDefault()
    await onSignUp(values)
      .unwrap()
      .then(() => {
        dispatch(modalActionCreator.hideModal())
      })
  }
  return (
    <>
      <h2 className={`${style.ModalTitle} mb-5`}>
        Sign up to PizzaHub
      </h2>
      <div className={style.SocialButtons}>
      <span>
        <GoogleSign/>
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
          onClick={() => handleModalChange()}
        >
          Log in
        </button>
      </div>
    </>
  )
}
