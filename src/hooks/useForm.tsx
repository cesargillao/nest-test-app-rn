import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const resetForm = () => {
    setValues(initialState);
  };

  const onChange = (newValues: Partial<T>) => {
    setValues({
      ...values,
      ...newValues,
    });
  };

  return { values, onChange, resetForm };
};
