import { experienceItems, profileSummary } from '@/data/profile';
import { usePageEntrance } from '@/hooks/usePageEntrance';

export function ExperiencePage() {
  const ref = usePageEntrance(0.1);

  return (
    <div ref={ref} className="page-shell">
      <h1 className="page-title will-animate mb-[10px]">Experience</h1>
      <p className="page-intro will-animate mb-8 max-w-[560px] sm:mb-10">
        {profileSummary}
      </p>

      <div className="will-animate relative flex flex-col gap-5 md:gap-6">
        <div className="absolute bottom-0 left-[11px] top-1 hidden w-px bg-[linear-gradient(180deg,rgba(124,58,237,0.5)_0%,rgba(124,58,237,0.12)_100%)] md:block" />
        {experienceItems.map((item) => (
          <section
            key={`${item.company}-${item.role}`}
            className="relative md:pl-10"
          >
            <div className="absolute left-0 top-5 hidden h-[22px] w-[22px] items-center justify-center rounded-full border border-[color:rgba(124,58,237,0.3)] bg-[var(--bg-body)] shadow-[var(--timeline-shadow)] md:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            </div>

            <div className="panel-surface rounded-[20px] p-5 sm:p-6">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-primary text-[19px] font-bold tracking-[-0.35px]">
                    {item.role}
                  </h2>
                  <p className="text-muted mt-1 text-[13px] font-medium">
                    {item.company}
                  </p>
                  <p className="text-dim mt-1 text-[12px]">{item.location}</p>
                </div>
                <span className="chip-surface inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  {item.period}
                </span>
              </div>

              <p className="text-dim mb-4 max-w-[720px] text-[12.5px] leading-[1.7]">
                {item.summary}
              </p>

              <ul className="text-secondary space-y-2 text-[12.5px] leading-[1.7]">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
