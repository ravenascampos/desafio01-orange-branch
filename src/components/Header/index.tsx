'use client';

import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  useTheme,
  AppBarProps as MuiAppBarProps,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { ArrowBack, LogoIcon, News } from '../../../public/icons';
import HeaderMobile from './HeaderMobile';
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  toggleDrawer: () => void;
}

function Header({}: AppBarProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));
  return isSmallDevice ? (
    <HeaderMobile />
  ) : (
    <AppBar
      position="fixed"
      sx={{
        // padding: '2rem 1rem',
        marginLeft: '230px',
        padding: '0',
        borderLeft: '2px solid #C4C4C4',
        borderRight: '2px solid #C4C4C4',
      }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h3">Home</Typography>
          </Grid>
          <Grid item>
            <News
              style={{
                width: '35px',
                height: '35px',
              }}
            />
          </Grid>

          {/* <IconButton>
            <ArrowBack
              style={{
                width: '16px',
              }}
            />
          </IconButton> */}
          {/* <Grid>
            <Typography variant="h5">User Test</Typography>
            <Typography variant="subtitle1" sx={{ opacity: '60%' }}>
              1.070 Tweets
            </Typography>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
