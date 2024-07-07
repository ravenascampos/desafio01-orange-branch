'use cient';
import React from 'react';
import { Button as MuiButton, SvgIcon } from '@mui/material';
import { Google } from '../../../public/icons';
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
  linkComponent?: React.ElementType | undefined;
  to?: string;
  fullWidth?: boolean;
};

function Button({
  variant,
  text,
  disabled,
  icon,
  linkComponent,
  to,
  fullWidth,
}: ButtonProps) {
  return (
    <MuiButton
      LinkComponent={linkComponent}
      to={to}
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
