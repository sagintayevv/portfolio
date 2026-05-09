import { ProjectCard } from '@/components/Cards';
import { IconDesign } from '@/components/Icons';
import { projects } from '@/data/projects';
import { usePageEntrance } from '@/hooks/usePageEntrance';

const designProjects = projects.filter((project) => project.category === 'design');

export function DesignPage() {
  const ref = usePageEntrance(0.12);

  return (
    <div ref={ref} className="page-shell">
      <h1 className="page-title will-animate mb-[10px]">
        Design Projects
      </h1>
      <p className="page-intro will-animate mb-8 max-w-[440px] sm:mb-9">
        A selection of product design and interface work shaped around
        usability, consistency, and visual restraint.
      </p>
      <div className="will-animate h-slider">
        {designProjects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project}
            widthClass="w-full sm:w-[340px] lg:w-[360px]"
            metaIcon={<IconDesign size={18} />}
          />
        ))}
      </div>
    </div>
  );
}
