import { useLocation, useNavigate } from 'react-router-dom';
import {
  IconBriefcase,
  IconHome,
  IconLinkedIn,
  IconMoon,
  IconSpark,
  IconStack,
  IconSun,
  IconTelegram,
} from '@/components/Icons';
import type { NavItem, SocialItem } from '@/types';
import { SidebarButton } from './SidebarButton';
import { sidebarItems } from './sidebarConfig';

const navIconMap: Record<string, JSX.Element> = {
  home: <IconHome size={19} />,
  projects: <IconStack size={19} />,
  skills: <IconSpark size={19} />,
  experience: <IconBriefcase size={19} />,
};

const socialIconMap: Record<string, JSX.Element> = {
  linkedin: <IconLinkedIn size={17} />,
  telegram: <IconTelegram size={17} />,
};

const navRouteMap: Record<string, string> = {
  home: '/',
  projects: '/projects',
  skills: '/skills',
  experience: '/experience',
};

interface SidebarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const navItems = sidebarItems.filter((item) => item.type === 'nav') as NavItem[];
  const socialItems = sidebarItems.filter((item) => item.type === 'social') as SocialItem[];

  const isActive = (id: string) => {
    const route = navRouteMap[id];
    return route === '/' ? pathname === '/' : pathname.startsWith(route);
  };

  return (
    <aside className="order-last border-t border-[var(--border-soft)] bg-[var(--bg-app-veil)] px-3 py-2 backdrop-blur md:order-none md:flex md:h-full md:justify-center md:border-t-0 md:bg-transparent md:px-3 md:py-6 md:backdrop-blur-0">
      <nav className="sidebar-pill" aria-label="Main navigation">
        {navItems.map((nav) => (
          <SidebarButton
            key={nav.id}
            active={isActive(nav.id)}
            title={nav.label}
            onClick={() => navigate(navRouteMap[nav.id])}
          >
            {navIconMap[nav.id]}
          </SidebarButton>
        ))}
        <div className="sidebar-divider hidden md:block" />
        <SidebarButton
          title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          onClick={onToggleTheme}
          className="theme-btn"
        >
          {theme === 'dark' ? <IconSun size={17} /> : <IconMoon size={17} />}
        </SidebarButton>
        {socialItems.map((social) => (
          <SidebarButton
            key={social.id}
            title={social.label}
            href={social.href}
            className="max-md:h-9 max-md:w-9"
          >
            {socialIconMap[social.id]}
          </SidebarButton>
        ))}
      </nav>
    </aside>
  );
}
