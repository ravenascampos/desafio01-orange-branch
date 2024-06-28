import { List, ListItem, ListSubheader, useTheme } from '@mui/material';
import React from 'react';
import RecentUser from '../RecentUser';
import Button from '../Button';

type RecentUsersSectionProps = {};

function RecentUsersSection({}: RecentUsersSectionProps) {
  const theme = useTheme();
  const items = [1, 2, 3, 4, 5];
  return (
    <List
      sx={{
        backgroundColor: theme.palette.background.paper,
        maxWidth: '24rem',
        borderRadius: '10px',
        padding: '0.5rem',
      }}
      subheader={
        <ListSubheader
          component="h4"
          sx={{
            color: theme.palette.text.primary,
            fontSize: '1.5rem',
            fontWeight: '700',
            lineHeight: '28.13px',
          }}
        >
          Usuários recentes
        </ListSubheader>
      }
    >
      {items.slice(0, 2).map((item) => (
        <RecentUser key={item} />
      ))}
      <ListItem>
        <Button text="Veja mais" variant="text" />
      </ListItem>
    </List>
  );
}

export default RecentUsersSection;
