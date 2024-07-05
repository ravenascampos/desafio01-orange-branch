import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Toolbar,
  useTheme,
  AppBarProps as MuiAppBarProps,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { LogoIcon } from '../../../public/icons';
import SidebarMenuOptions from '../SidebarMenuOptions';
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

function Header({}: AppBarProps) {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = useTheme();
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Grid container direction="row" flexWrap="nowrap"></Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
