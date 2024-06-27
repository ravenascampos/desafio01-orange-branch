import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuList,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import useDropdownMenuOptionsData from './DropdownMenuOptions.hooks';

type DropdownMenuOptionsProps = {};

function DropdownMenuOptions({}: DropdownMenuOptionsProps) {
  const { items } = useDropdownMenuOptionsData();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  const theme = useTheme();
  return (
    <MenuList
      sx={{
        width: '268px',
      }}
    >
      {items.map((item, index) => {
        const {
          icon: Icon,
          selectedIcon: SelectedIcon,
          description,
          name,
        } = item;
        const IconComponent = selectedIndex === index ? SelectedIcon : Icon;
        return (
          <MenuList key={name}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={(event) => handleListItemClick(event, index)}
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
          </MenuList>
        );
      })}
    </MenuList>
  );
}

export default DropdownMenuOptions;
