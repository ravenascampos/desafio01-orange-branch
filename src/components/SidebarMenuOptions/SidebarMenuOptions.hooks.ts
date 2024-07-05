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

export default function useSidebarMenuOptionsData() {
  const itemsMenu = [
    {
      icon: HomeOutline,
      selectedIcon: HomeFill,
      description: 'Home',
      name: 'home',
      href: '/',
    },
    {
      icon: Explore,
      selectedIcon: ExploreFill,
      description: 'Explorar',
      name: 'explore',
      href: '/',
    },
    {
      icon: Notification,
      selectedIcon: NotificationFill,
      description: 'Notificação',
      name: 'notification',
      href: '',
    },
    {
      icon: Messages,
      selectedIcon: MessagesFill,
      description: 'Mensagens',
      name: 'messages',
      href: '',
    },
    {
      icon: ProfileOutline,
      selectedIcon: ProfileFill,
      description: 'Perfil',
      name: 'profile',
      href: '/profile',
    },
    {
      icon: More,
      selectedIcon: MoreFill,
      description: 'Mais',
      name: 'more',
      href: '',
    },
  ];

  return { items: itemsMenu };
}
