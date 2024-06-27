import {
  Explore,
  ExploreFill,
  HomeFill,
  HomeOutline,
  Messages,
  MessagesFill,
  More,
  MoreFill,
  Notification,
  NotificationFill,
  ProfileFill,
  ProfileOutline,
} from '../../../public/icons';

export default function useDropdownMenuOptionsData() {
  const itemsMenu = [
    {
      icon: HomeOutline,
      selectedIcon: HomeFill,
      description: 'Home',
      name: 'home',
    },
    {
      icon: Explore,
      selectedIcon: ExploreFill,
      description: 'Explorar',
      name: 'explore',
    },
    {
      icon: Notification,
      selectedIcon: NotificationFill,
      description: 'Notificação',
      name: 'notification',
    },
    {
      icon: Messages,
      selectedIcon: MessagesFill,
      description: 'Mensagens',
      name: 'messages',
    },
    {
      icon: ProfileOutline,
      selectedIcon: ProfileFill,
      description: 'Perfil',
      name: 'profile',
    },
    {
      icon: More,
      selectedIcon: MoreFill,
      description: 'Mais',
      name: 'more',
    },
  ];

  return { items: itemsMenu };
}
