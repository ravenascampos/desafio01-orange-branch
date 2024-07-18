'use client';

import { AppBar, Grid, IconButton, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { LogoIcon, MoreHorizontal } from '../../../../public/icons';
import SidebarMobile from '@/components/Sidebar/SidebarMobile';
import { Close } from '@mui/icons-material';

function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
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
            <IconButton onClick={toggleDrawer(true)}>
              {!open ? <MoreHorizontal /> : <Close />}
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
      <SidebarMobile open={open} toggleDrawer={toggleDrawer(false)} />
    </>
  );
}

export default HeaderMobile;
