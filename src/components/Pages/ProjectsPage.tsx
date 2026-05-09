import { ProjectCard } from '@/components/Cards';
import { IconStack } from '@/components/Icons';
import { projects } from '@/data/projects';
import { usePageEntrance } from '@/hooks/usePageEntrance';

const metaIconMap: Record<string, JSX.Element> = {
  frontend: <IconStack size={18} />,
};

export function ProjectsPage() {
  const ref = usePageEntrance(0.1);

  return (
    <div ref={ref} className="page-shell">
      <h1 className="page-title will-animate mb-[10px]">Projects</h1>
      <p className="page-intro will-animate mb-8 max-w-[520px] sm:mb-9">
        Реальные проекты в сфере frontend-разработки: образовательные
        платформы, корпоративные сайты и продуктовые сервисы с акцентом на
        адаптивность, удобство и качество интерфейсов.
      </p>

      <div className="will-animate h-slider">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project}
            widthClass="w-full sm:w-[360px] lg:w-[400px]"
            metaIcon={metaIconMap[project.category]}
          />
        ))}
      </div>
    </div>
  );
}
