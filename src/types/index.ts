export type RouteId = 'home' | 'projects' | 'skills' | 'experience';

export interface NavItem {
  id: RouteId;
  label: string;
  type: 'nav';
}

export interface SocialItem {
  id: string;
  label: string;
  href: string;
  type: 'social';
}

export type SidebarItem = NavItem | SocialItem | { type: 'divider' };

export interface ProjectCover {
  id: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  category: RouteId | string;
  categoryLabel: string;
  description: string;
  projectUrl: string;
}
