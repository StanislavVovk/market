import React, { FC, HTMLInputTypeAttribute } from 'react';
import { useController } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
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
}

export const Input: FC<IInputProps> = (
  {
    name,
    control,
    type,
    placeholder,
    errors,
    disabled = false,
    labelText,
    className
  }): JSX.Element => {
  const { field } = useController({ name, control })
  return (
    <div>
      <div className={`form-floating ${className ?? ''}`}>
        <input
          {...field}
          className={`form-control ${style.Input}`}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
        />
        <label>{labelText}</label>
        <span>
        <ErrorMessage errors={errors} name={name}/>
      </span>
      </div>
    </div>
  );
};
