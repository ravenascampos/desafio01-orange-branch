'use client';

import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import { LogoIcon, MoreHorizontal } from '../../../../public/icons';

type Props = {};

const HeaderMobile = (props: Props) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        padding: '0',
      }}
    >
      <Toolbar sx={{ padding: '0 1rem' }}>
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
          columnGap={2}
        >
          <IconButton>
            <LogoIcon
              style={{
                width: '35px',
                height: '35px',
              }}
            />
          </IconButton>
          <IconButton>
            <MoreHorizontal />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMobile;
