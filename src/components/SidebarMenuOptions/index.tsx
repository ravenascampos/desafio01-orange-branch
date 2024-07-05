'use client';

import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import useSidebarMenuOptionsData from './SidebarMenuOptions.hooks';
import Link from 'next/link';

type SidebarMenuOptionsProps = {};

function SidebarMenuOptions({}: SidebarMenuOptionsProps) {
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <MenuList
      sx={{
        width: isSmallScreen ? '68px' : '268px',
        transition: 'width 0.3s',
      }}
    >
      {items.map((item, index) => {
        const {
          icon: Icon,
          selectedIcon: SelectedIcon,
          description,
          name,
          href,
        } = item;
        const IconComponent =
          selectedIndex === index || hoverIndex === index ? SelectedIcon : Icon;
        return (
          <Link key={name} href={href}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="subvariant-noSelected"
            >
              {isSmallScreen ? (
                <Tooltip title={description} placement="top">
                  <ListItemIcon
                    sx={{
                      color: theme.palette.text.primary,
                    }}
                  >
                    <IconComponent size={28} height={28} width={28} />
                  </ListItemIcon>
                </Tooltip>
              ) : (
                <ListItemIcon
                  sx={{
                    color: theme.palette.text.primary,
                  }}
                >
                  <IconComponent size={28} height={28} width={28} />
                </ListItemIcon>
              )}

              {!isSmallScreen && (
                <ListItemText
                  primary={description}
                  primaryTypographyProps={{
                    color: theme.palette.text.primary,
                    variant: 'h6',
                  }}
                />
              )}
            </ListItemButton>
          </Link>
        );
      })}
    </MenuList>
  );
}

export default SidebarMenuOptions;
