import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { LogoIcon } from '../../../public/icons';

type Props = {};

function Header({}: Props) {
  const theme = useTheme();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container direction="row" flexWrap="nowrap">
          <Grid item container direction="row">
            <IconButton
              sx={{
                color: theme.palette.text.primary,
                fill: theme.palette.text.primary,
              }}
            >
              <MenuIcon />
            </IconButton>
            <IconButton>
              <LogoIcon
                style={{
                  width: '40px',
                  height: '40px',
                }}
              />
            </IconButton>
          </Grid>
          <IconButton>
            <Avatar
              sx={{
                width: '40px',
                height: '40px',
              }}
            />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
