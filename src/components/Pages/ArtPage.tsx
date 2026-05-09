import { ProjectCard } from '@/components/Cards';
import { IconArt } from '@/components/Icons';
import { projects } from '@/data/projects';
import { usePageEntrance } from '@/hooks/usePageEntrance';

const artProjects = projects.filter((project) => project.category === 'art');

export function ArtPage() {
  const ref = usePageEntrance(0.12);

  return (
    <div ref={ref} className="page-shell">
      <h1 className="page-title will-animate mb-[10px]">
        Art Projects
      </h1>
      <p className="page-intro will-animate mb-8 max-w-[440px] sm:mb-9">
        Digital and generative pieces exploring texture, structure, and visual
        systems built through experimentation.
      </p>
      <div className="will-animate h-slider">
        {artProjects.map((project) => (
          <ProjectCard
            key={project.id}
            cover={project}
            widthClass="w-full sm:w-[340px] lg:w-[360px]"
            metaIcon={<IconArt size={18} />}
          />
        ))}
      </div>
    </div>
  );
}
