import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

type InputSelectProps<T> = {
  label: string;
  options: T[];
  value: T | null;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<{}>, newValue: T | null) => void;
  error?: boolean;
};

function InputSelect<T>({
  label,
  options,
  value,
  disabled,
  onChange,
  error,
}: InputSelectProps<T>) {
  return (
    <Autocomplete
      value={value}
      options={options}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} label={label} error={error} />
      )}
      disabled={disabled}
    />
  );
}

export default InputSelect;
