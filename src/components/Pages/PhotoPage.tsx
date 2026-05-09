import { ProjectCard } from '@/components/Cards';
import { IconPhoto } from '@/components/Icons';
import { projects } from '@/data/projects';
import { usePageEntrance } from '@/hooks/usePageEntrance';

const photoProjects = projects.filter((project) => project.category === 'photo');

export function PhotoPage() {
  const ref = usePageEntrance(0.12);

  return (
    <div ref={ref} className="page-shell">
      <h1 className="page-title will-animate mb-[10px]">
        Photo Projects
      </h1>
      <p className="page-intro will-animate mb-8 max-w-[440px] sm:mb-9">
        Photography series centered on atmosphere, observation, and the balance
        between light, composition, and subject.
      </p>
      <div className="will-animate h-slider">
        {photoProjects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project}
            widthClass="w-full sm:w-[300px] lg:w-[320px]"
            metaIcon={<IconPhoto size={18} />}
          />
        ))}
      </div>
    </div>
  );
}
