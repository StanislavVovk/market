import React, { FC, HTMLInputTypeAttribute } from 'react';
import { Mode, useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FloatingLabel, Form } from 'react-bootstrap';
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
  signError?: boolean | string
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
    mode = 'all',
    signError
  }): JSX.Element => {
  const { field } = useController({ name, control })
  const { onChange, value } = field

  return (
    <Form.Group className={className.concat(' ', style.Input)}>
      <FloatingLabel label={labelText}>
        <Form.Control
          onChange={onChange}
          value={value}
          type={type}
          isInvalid={!!errors[name] || !!signError}
          isValid={mode !== 'all' ? !errors[name] && value : undefined}
          disabled={disabled}
          placeholder={placeholder}
        />
        <Form.Control.Feedback type="invalid">
          <ErrorMessage name={name} errors={errors}/>
        </Form.Control.Feedback>
      </FloatingLabel>
    </Form.Group>
  );
};
