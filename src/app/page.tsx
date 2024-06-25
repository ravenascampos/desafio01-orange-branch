'use client';
import {
  Box,
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  SvgIcon,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import {
  HomeOutline,
  Explore,
  Notification,
  Messages,
  ProfileOutline,
  More,
  Apple,
  Schedule,
  Statistics,
  Stats,
} from '../../public/icons';
import Input from '@/components/Input';

export default function Home() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <main>
      <Input
        label={'E-mail'}
        type="password"
        variant="outlined"
        id="email-login"
      />
      <Input
        type="text"
        id="search"
        variant="filled"
        placeholder="Search Twitter"
      />
      {/* <Box>
        <Typography variant="subtitle2">Hello, World</Typography>
        <Button variant="primaryContained">seguir</Button>
        <Button variant="outlined">seguir</Button>
        <Button variant="text">seguir</Button>
        <TextField />
      </Box>
      <Tabs
        variant="custonTab"
        onChange={handleChange}
        aria-label="lab API tabs example"
        value={value}
      >
        <Tab label="Tweets" value="1" />
        <Tab label="Tweets & replies" value="2" />
        <Tab label="Media" value="3" />
        <Tab label="Likes" value="4" />
      </Tabs> */}
      {/* <MenuList variant="menu">
        <MenuItem>
          <ListItemIcon sx={{ width: '50px', height: '50px' }}>
            <SvgIcon
              component={Apple}
              // sx={{ fontSize: '1.5rem', width: '1rem', height: '1rem' }}
            />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={Stats} />
          </ListItemIcon>
          <ListItemText>Explore</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={Notification} />
          </ListItemIcon>
          <ListItemText>Notification</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={Messages} />
          </ListItemIcon>
          <ListItemText>Messages</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={ProfileOutline} />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SvgIcon component={More} />
          </ListItemIcon>
          <ListItemText>More</ListItemText>
        </MenuItem>
      </MenuList> */}
    </main>
  );
}
