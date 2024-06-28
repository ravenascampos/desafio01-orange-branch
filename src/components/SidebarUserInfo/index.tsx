import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import { MoreHorizontal } from '../../../public/icons';

type SidebarUserInfoProps = {};

function SidebarUserInfo({}: SidebarUserInfoProps) {
  const theme = useTheme();
  return (
    <ListItem
      alignItems="center"
      sx={{
        width: '268px',
      }}
    >
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary="User Teste"
        primaryTypographyProps={{
          color: theme.palette.text.primary,
          variant: 'subtitle1',
        }}
        secondary={
          <>
            <Typography variant="subtitle2" color={theme.palette.text.primary}>
              @usuarioTeste
            </Typography>
          </>
        }
      />
      <ListItemButton
        sx={{
          marginLeft: '3rem',
        }}
      >
        <MoreHorizontal />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarUserInfo;
