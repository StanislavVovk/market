import { ValidationMode } from 'react-hook-form';

interface UserModeEnumKey {
  onChange: string
  onSubmit: string
}
export const UseFormMode: Record<keyof UserModeEnumKey, keyof ValidationMode> = {
  onChange: 'onChange',
  onSubmit: 'onSubmit'
};
