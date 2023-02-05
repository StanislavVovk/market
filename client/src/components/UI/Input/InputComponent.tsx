import { ErrorMessage } from '@hookform/error-message'
import React, { HTMLInputTypeAttribute, FC } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { useController, Mode } from 'react-hook-form'
import { useAppSelector } from 'common/common'
import style from './input.module.css'

interface IInputProps {
  name: string
  control: any
  type: HTMLInputTypeAttribute
  errors: { [x: string]: any }
  disabled?: boolean
  placeholder?: string
  labelText: string
  className?: string
  mode?: Mode
}

export const InputComponent: FC<IInputProps> = (
  {
    name,
    control,
    type,
    placeholder,
    errors,
    disabled = false,
    labelText,
    className = 'mb-4',
    mode = 'all'
  }): JSX.Element => {
  const { field } = useController({
    name,
    control
  })
  const {
    onChange,
    value
  } = field
  const errorState = useAppSelector(state => state.authReducer.error)
  return (
    <Form.Group className={className.concat(' ', style.Input)}>
      <FloatingLabel label={labelText}>
        <Form.Control
          onChange={onChange}
          value={value}
          type={type}
          isInvalid={!!errors[name] || !!errorState}
          isValid={mode !== 'all' ? !errors[name] && value : undefined}
          disabled={disabled}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} errors={errors}/>
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  )
}
