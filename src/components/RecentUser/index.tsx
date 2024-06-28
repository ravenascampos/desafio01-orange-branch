import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import React from 'react';
import Button from '../Button';

type RecentUserProps = {};

function RecentUser({}: RecentUserProps) {
  const theme = useTheme();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ width: 60, height: 60, marginRight: '1rem' }} />
      </ListItemAvatar>
      <ListItemText
        primary="User Teste"
        primaryTypographyProps={{
          color: theme.palette.text.primary,
          variant: 'subtitle1',
        }}
        secondary={
          <Typography variant="subtitle2" color={theme.palette.text.primary}>
            @usuarioTeste
          </Typography>
        }
      />
      <Button text="Seguir" variant="secondaryContained" />
    </ListItem>
  );
}

export default RecentUser;
