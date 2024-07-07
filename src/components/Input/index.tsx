'use client';

import {
  IconButton,
  InputAdornment,
  SvgIcon,
  TextField,
  TextFieldVariants,
  useTheme,
} from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Search } from '../../../public/icons';

type Props = {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  id: string;
  variant?: TextFieldVariants;
  placeholder?: string;
  error?: boolean;
};

function Input({ label, type, id, variant, placeholder, error }: Props) {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  function toggleShowPassword() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }
  return (
    <TextField
      error={error}
      label={label}
      variant={variant}
      type={type}
      id={id}
      placeholder={placeholder}
      fullWidth
      InputProps={{
        endAdornment:
          type !== 'password' ? null : (
            <InputAdornment position="end">
              {showPassword ? (
                <IconButton onClick={toggleShowPassword}>
                  <VisibilityOffOutlined
                    sx={{
                      color: theme.palette.grey[100],
                    }}
                  />
                </IconButton>
              ) : (
                <IconButton onClick={toggleShowPassword}>
                  <VisibilityOutlined
                    sx={{
                      color: theme.palette.grey[100],
                    }}
                  />
                </IconButton>
              )}
            </InputAdornment>
          ),
        startAdornment:
          variant !== 'filled' ? null : (
            <InputAdornment position="start">
              <IconButton>
                <SvgIcon
                  component={Search}
                  sx={{
                    color: theme.palette.grey[100],
                    stroke: 'currentColor',
                  }}
                />
              </IconButton>
            </InputAdornment>
          ),
      }}
    />
  );
}

export default Input;
