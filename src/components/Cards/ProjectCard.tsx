import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { IconLink } from '@/components/Icons';
import type { ProjectCover } from '@/types';

interface Props {
  cover: ProjectCover;
  widthClass?: string;
  metaIcon: React.ReactNode;
}

export function ProjectCard({
  cover,
  widthClass = 'w-[400px]',
  metaIcon,
}: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${cover.id}`);
  };

  return (
    <article
      className={clsx('proj-card', widthClass)}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => event.key === 'Enter' && handleClick()}
    >
      <div className="proj-card-frame">
        <div className="proj-card-cover relative bg-[var(--bg-panel-strong)]">
          <img
            src={cover.imageSrc}
            alt={cover.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,16,0.16)_0%,rgba(10,11,16,0.38)_48%,rgba(10,11,16,0.82)_100%)]" />
          <div className="relative z-[1] flex flex-col items-center gap-2 max-md:gap-1.5">
            <h3
              className={clsx(
                'text-center font-extrabold leading-[1.15] tracking-[-0.5px] text-white max-md:text-[20px]',
                widthClass.includes('320px') ? 'text-[20px] sm:text-[22px]' : 'text-[22px] sm:text-[24px] lg:text-[26px]'
              )}
            >
              {cover.title}
            </h3>
            <p className="text-center text-[12px] font-normal text-white/80 sm:text-[13px]">
              {cover.subtitle}
            </p>
          </div>
        </div>

        <div className="proj-card-meta">
          <span className="shrink-0 text-[var(--text-faint)]">{metaIcon}</span>
          <div className="min-w-0 flex-1">
            <p className="text-[12.5px] font-semibold leading-[1.2] text-[var(--text-secondary)] sm:text-[13px]">
              {cover.categoryLabel}
            </p>
            <p className="mt-0.5 text-[10.5px] leading-[1.45] text-[var(--text-faint)] sm:text-[11px]">
              {cover.description}
            </p>
          </div>
          <a
            href={cover.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${cover.title}`}
            className="ml-auto shrink-0 text-[var(--text-link-icon)] transition-colors hover:text-[var(--text-soft)]"
            onClick={(event) => event.stopPropagation()}
          >
            <IconLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
