import { GoogleAuthProvider, AuthProvider } from '@firebase/auth'
import { useAppDispatch } from 'common/hooks/hooks'
import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { profileActionCreator, modalActionCreator } from 'store/actions'

export const GoogleSign: FC = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const googleProvider = new GoogleAuthProvider()
  const onOASign = (provider: AuthProvider) => dispatch(profileActionCreator.signWithProvider(provider))

  const handleOAuthClick = async () => {
    await onOASign(googleProvider)
      .unwrap()
      .then(() => {
        dispatch(modalActionCreator.hideModal())
      })
  }
  return (
    <Button
      onClick={handleOAuthClick}>
      <i className="fa-brands fa-google"/>
    </Button>
  )
}
