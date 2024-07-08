'use client';
import React from 'react';
import { Button as MuiButton } from '@mui/material';
type ButtonProps = {
  variant:
    | 'primaryContained'
    | 'secondaryContained'
    | 'outlined'
    | 'outlinedIcon'
    | 'text';
  text: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
};

function Button({ variant, text, disabled, icon, fullWidth }: ButtonProps) {
  return (
    <MuiButton
      variant={variant}
      disabled={disabled}
      fullWidth={fullWidth}
      startIcon={variant !== 'outlinedIcon' ? null : icon}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
