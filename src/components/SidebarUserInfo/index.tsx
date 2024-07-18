'use client';

import {
  Avatar,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { MoreHorizontal } from '../../../public/icons';

type SidebarUserInfoProps = {};

function SidebarUserInfo({}: SidebarUserInfoProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      direction={isSmallScreen ? 'column' : 'row'}
      flexWrap="nowrap"
      columnSpacing={1}
    >
      <Grid item>
        <Avatar />
      </Grid>
      {!isSmallScreen ? (
        <Grid
          item
          container
          direction="row"
          flexWrap="nowrap"
          columnSpacing={3}
        >
          <Grid item container direction="column">
            <Typography color={theme.palette.text.primary} variant="subtitle1">
              User Teste
            </Typography>

            <Typography variant="subtitle2" color={theme.palette.text.primary}>
              @usuarioTeste
            </Typography>
          </Grid>
          <Grid item container>
            <IconButton>
              <MoreHorizontal />
            </IconButton>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
}

export default SidebarUserInfo;
