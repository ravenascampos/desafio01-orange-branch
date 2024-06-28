'use client';
import {
  Box,
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
  Google,
} from '../../public/icons';
import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from '@/components/Link';
import Textarea from '@/components/Textarea';
import DropdownMenuOptions from '@/components/DropdownMenuOptions';
import DropdownUserInfo from '@/components/DrowpdownUserInfo';
import RecentUser from '@/components/RecentUser';

export default function Home() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <main>
      <RecentUser />
      {/* <DropdownUserInfo /> */}
      {/* <DropdownMenuOptions /> */}
      {/* <Textarea /> */}
      {/* <Link href="jfj" text="Termos de Serviço" variant="body2" /> */}
      {/* <Button variant="primaryContained" text="Log In" />
      <Button variant="secondaryContained" text="Seguir" />
      <Button variant="outlined" text="Entre com e-mail" />
      <Button
        variant="outlinedIcon"
        text="Entre com o Google"
        icon={<Google />}
      />
      <Button
        variant="outlinedIcon"
        text="Entre com o Google"
        icon={<Apple />}
      />
      <Button variant="text" text="Esqueceu a senha?" />
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
      /> */}
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
