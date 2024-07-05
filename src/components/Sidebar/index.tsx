'use client';

import SidebarUserInfo from '../SidebarUserInfo';
import SidebarMenuOptions from '../SidebarMenuOptions';
import { Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { LogoIcon } from '../../../public/icons';
import Button from '../Button';

type Props = {};

function Sidebar({}: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      container
      padding={isSmallScreen ? '8px 8px' : '24px 8px'}
      flexDirection="column"
      justifyContent="space-between"
      sx={{
        height: '100vh',
        width: '10vw',
        minWidth: isSmallScreen ? '20vw' : '230px',
        borderRight: '2px solid #C4C4C4',
      }}
    >
      <Grid
        item
        container
        justifyContent={isSmallScreen ? 'center' : 'flex-start'}
      >
        <IconButton>
          <LogoIcon
            style={{
              width: '40px',
              height: '40px',
            }}
          />
        </IconButton>
        <SidebarMenuOptions />
      </Grid>
      <Grid item container justifyContent="center">
        <Button text="Tweet" variant="primaryContained" />
      </Grid>
      <Grid item container justifyContent="center">
        <SidebarUserInfo />
      </Grid>
    </Grid>
  );
}

export default Sidebar;
