import { Control, FieldErrors, useForm, UseFormHandleSubmit, UseFormWatch, ValidationMode } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { UseFormMode } from '../../enums/userMode.enum';
import { Schema } from 'joi';

interface IUseAppForm {
  validationSchema?: Schema
  defaultValues: Record<string, string>
  mode?: keyof ValidationMode
}

interface UseAppFormReturn {
  control: Control
  errors: FieldErrors
  watch: UseFormWatch<any>
  reset: Partial<any>
  handleSubmit: UseFormHandleSubmit<any>
}
export const useAppForm = ({ validationSchema, defaultValues, mode }: IUseAppForm): UseAppFormReturn => {
  const {
    control,
    formState: { errors },
    reset,
    watch,
    handleSubmit
  } = useForm({
    defaultValues,
    resolver: validationSchema ? joiResolver(validationSchema) : undefined,
    mode: mode ?? UseFormMode.onSubmit
  });

  return {
    control,
    errors,
    reset,
    watch,
    handleSubmit
  };
};
