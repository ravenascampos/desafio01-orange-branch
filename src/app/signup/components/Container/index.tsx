'use client';

import React from 'react';
import {
  Container as MuiContainer,
  useMediaQuery,
  useTheme,
} from '@mui/material';

function Container({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <MuiContainer
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: isSmallDevice ? 'column' : 'row',
        height: !isSmallDevice ? '100dvh' : '100%',
        width: '100%',
        overflow: 'hidden',
        padding: !isSmallDevice ? '0 !important' : '16px !important',
      }}
    >
      {!isSmallDevice && (
        <MuiContainer
          sx={{
            flex: 1,
            backgroundImage: 'url(/images/background-signup.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100%',
          }}
        />
      )}
      <MuiContainer
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
        }}
      >
        {children}
      </MuiContainer>
    </MuiContainer>
  );
}

export default Container;
