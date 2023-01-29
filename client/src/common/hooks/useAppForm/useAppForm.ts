import { useForm, ValidationMode } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { UseFormMode } from '../../enums/user/userMode.enum';
import { Schema } from 'joi';

interface IUseAppForm {
  validationSchema?: Schema
  defaultValues: Record<string, string>
  mode?: keyof ValidationMode
}

export const useAppForm = ({ validationSchema, defaultValues, mode }: IUseAppForm) => {
  const {
    control,
    formState: { errors, isValid, isDirty },
    reset,
    watch,
    handleSubmit,
    setError
  } = useForm({
    defaultValues,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined,
    mode: mode ?? UseFormMode.onSubmit
  });

  return {
    control,
    isValid,
    isDirty,
    errors,
    reset,
    watch,
    handleSubmit,
    setError
  };
};
