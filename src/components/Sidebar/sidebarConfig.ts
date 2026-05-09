import type { SidebarItem } from '@/types';

export const sidebarItems: SidebarItem[] = [
  { id: 'home', label: 'Home', type: 'nav' },
  { id: 'projects', label: 'Projects', type: 'nav' },
  { id: 'skills', label: 'Skills', type: 'nav' },
  { id: 'experience', label: 'Experience', type: 'nav' },
  { type: 'divider' },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sagintayevv',
    type: 'social',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/sagintayevv',
    type: 'social',
  },
];
