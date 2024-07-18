'use client';

import {
  Drawer,
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import useSidebarMenuOptionsData from '@/components/SidebarMenuOptions/SidebarMenuOptions.hooks';
import Button from '@/components/Button';
import SidebarUserInfo from '@/components/SidebarUserInfo';

type SidebarMobileProps = {
  toggleDrawer: () => void;
  open: boolean;
};

function SidebarMobile({ toggleDrawer, open }: SidebarMobileProps) {
  const { items } = useSidebarMenuOptionsData();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const theme = useTheme();
  return (
    <Drawer open={open} onClose={toggleDrawer}>
      <MenuList
        sx={{
          width: '80vw',
          transition: 'width 0.3s',
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          height="90vh"
          p="1rem"
        >
          <Grid item>
            {items.map((item, index) => {
              const {
                icon: Icon,
                selectedIcon: SelectedIcon,
                description,
                name,
                href,
              } = item;
              const IconComponent =
                selectedIndex === index || hoverIndex === index
                  ? SelectedIcon
                  : Icon;
              return (
                <Link key={name} href={href}>
                  <ListItemButton
                    selected={selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    className="subvariant-noSelected"
                  >
                    <ListItemIcon
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      <IconComponent size={28} height={28} width={28} />
                    </ListItemIcon>
                    <ListItemText
                      primary={description}
                      primaryTypographyProps={{
                        color: theme.palette.text.primary,
                        variant: 'h6',
                      }}
                    />
                  </ListItemButton>
                </Link>
              );
            })}
          </Grid>
          <Grid item>
            <ListItem>
              <Button
                text="Tweet"
                variant="primaryContained"
                fullWidth={true}
              />
            </ListItem>
          </Grid>
          <Grid item>
            <ListItem>
              <SidebarUserInfo />
            </ListItem>
          </Grid>
        </Grid>
      </MenuList>
    </Drawer>
  );
}

export default SidebarMobile;
