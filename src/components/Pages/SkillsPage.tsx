import { profileSummary, skillGroups } from '@/data/profile';
import { usePageEntrance } from '@/hooks/usePageEntrance';

export function SkillsPage() {
  const ref = usePageEntrance(0.1);

  return (
    <div ref={ref} className="page-shell">
      <h1 className="page-title will-animate mb-[10px]">Skills</h1>
      <p className="page-intro will-animate mb-8 max-w-[520px] sm:mb-10">
        {profileSummary}
      </p>

      <div className="will-animate grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            className="panel-surface rounded-[20px] p-5 sm:p-6"
          >
            <h2 className="text-primary mb-2 text-[18px] font-bold tracking-[-0.35px]">
              {group.title}
            </h2>
            <p className="text-dim mb-5 text-[12.5px] leading-[1.7]">
              {group.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="chip-surface rounded-full px-3 py-1.5 text-[12px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
