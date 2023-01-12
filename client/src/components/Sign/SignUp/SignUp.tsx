import React, { FC } from 'react';
import { PageHeader } from '../../UI/common';
import { useAppForm } from '../../../common/hooks/useAppForm/useAppForm';
import { DEFAULT_SIGNUP_PAYLOAD } from '../../../common/constants/userDefaultPyload';
import { Input } from '../../UI/Input/Input';
import { UserPayloadKey } from '../../../common/enums/userPayoadKey';
import { SignUpValidation } from '../../../common/validatingSchema/schema';
import { ModalComponent } from '../../UI/Modal/Modal';
import { Button, Container } from 'react-bootstrap';
import style from '../sign.module.css'

export const SignInForm: FC = (): JSX.Element => {
  const { control, errors, handleSubmit } = useAppForm({
    mode: 'onChange',
    defaultValues: DEFAULT_SIGNUP_PAYLOAD,
    validationSchema: SignUpValidation
  })

  const handleLSignUp = (values: any) => {
    console.log(values)
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
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form name={'signUpForm'} onSubmit={handleSubmit(handleLSignUp)}>
        <Input
          name={UserPayloadKey.USERNAME}
          type="text"
          placeholder="Enter username"
          control={control}
          errors={errors}
          labelText="Enter username"
          className="mb-4"
        />
        <Input
          name={UserPayloadKey.EMAIL}
          type="email"
          placeholder="Enter email"
          control={control}
          errors={errors}
          labelText="Enter email"
          className="mb-4"
        />
        <Input
          name={UserPayloadKey.PASSWORD}
          type="password"
          placeholder="Enter password"
          control={control}
          errors={errors}
          labelText="Enter password"
          className="mb-4"
        />
        <Input
          name={UserPayloadKey.REPEAT_PASSWORD}
          type="password"
          placeholder="Repeat password"
          control={control}
          errors={errors}
          labelText="Repeat password"
          className="mb-4"
        />
        <div className='d-flex justify-content-center'>
          <Button disabled type="submit" className={`btn ${style.SubmitButton}`}>Sign up with email</Button>
        </div>
      </form>
      <div className={`d-flex justify-content-center align-items-center mt-4 ${style.Suggestion}`}>
        Got an account already?
        <Button className={style.SuggestionButton}>Log in</Button>
      </div>
    </>
  )
}

export const SignUp: FC = (): JSX.Element => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Container className={'pt-5 mt-5'}>
      <PageHeader pageName={'SignUp'}/>
      <Button variant="primary" onClick={() => setModalShow(true)}/>
      <ModalComponent
        show={modalShow}
        onHide={() => setModalShow(false)}>
        <SignInForm/>
      </ModalComponent>
    </Container>
  );
};
