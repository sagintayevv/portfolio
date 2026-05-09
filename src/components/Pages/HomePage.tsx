import { ProjectCard } from "@/components/Cards";
import { IconStack } from "@/components/Icons";
import { skillGroups } from "@/data/profile";
import { projects } from "@/data/projects";
import { usePageEntrance } from "@/hooks/usePageEntrance";

const metaIconMap: Record<string, JSX.Element> = {
  frontend: <IconStack size={18} />,
};

export function HomePage() {
  const ref = usePageEntrance(0.13);
  const primarySkillGroup = skillGroups[0];

  return (
    <div ref={ref} className="page-shell flex flex-col">
      <section className="mb-10 sm:mb-12 md:mb-14">
        <h1 className="page-title will-animate mb-4 sm:mb-[18px]">
          Sagintayev Abat
        </h1>

        <p className="page-intro will-animate max-w-[560px] font-normal">
          Я Frontend Developer и выпускник nFactorial School с опытом работы в
          React, TypeScript и современных веб-технологиях. Разрабатывал
          адаптивные образовательные платформы, корпоративные сайты и
          продуктовые сервисы. Люблю создавать понятные интерфейсы и писать
          чистый, поддерживаемый код.
        </p>
      </section>

      <section className="mb-10 sm:mb-12">
        <h2 className="will-animate mb-4 text-[16px] font-semibold tracking-[-0.25px] text-primary sm:mb-[18px] sm:text-[17px]">
          Проекты
        </h2>

        <div className="will-animate h-slider h-slider-mobile">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              cover={project}
              widthClass="w-full sm:w-[360px] lg:w-[400px]"
              metaIcon={metaIconMap[project.category]}
            />
          ))}
        </div>
      </section>

      {primarySkillGroup ? (
        <section>
          <h2 className="will-animate mb-4 text-[16px] font-semibold tracking-[-0.25px] text-primary sm:mb-[18px] sm:text-[17px]">
            Навыки и технологии
          </h2>

          <div className="will-animate">
            <div className="skill-chip-slider">
              {primarySkillGroup.items.map((item) => (
                <span
                  key={item}
                  className="chip-surface shrink-0 rounded-full px-3 py-1.5 text-[12px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
