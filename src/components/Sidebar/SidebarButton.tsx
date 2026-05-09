import clsx from 'clsx';
import type { ReactNode } from 'react';

interface Props {
  active?: boolean;
  title: string;
  onClick?: () => void;
  href?: string;
  children: ReactNode;
  className?: string;
}

export function SidebarButton({
  active,
  title,
  onClick,
  href,
  children,
  className,
}: Props) {
  const buttonClassName = clsx('sidebar-btn', active && 'active', className);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
        className={buttonClassName}
        aria-label={title}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      title={title}
      className={buttonClassName}
      aria-label={title}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </button>
  );
}
