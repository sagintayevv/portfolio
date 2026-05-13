import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate, useParams } from "react-router-dom";
import { IconStack } from "@/components/Icons";
import { projects } from "@/data/projects";
import type { ProjectDetail, ProjectSection } from "@/data/projects";

const categoryIcon: Record<string, JSX.Element> = {
  frontend: <IconStack size={14} />,
};

function BackArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function FullCardSection({ section }: { section: ProjectSection }) {
  return (
    <div className="relative mb-8 flex min-h-[240px] flex-col justify-end overflow-hidden rounded-[20px] bg-[var(--bg-panel)] sm:mb-10 sm:min-h-[280px]">
      <div className="relative z-[1] max-w-[520px] px-5 py-6 sm:px-7 sm:py-8 lg:px-9 lg:py-9">
        <h3 className="mb-2 text-[20px] font-extrabold leading-[1.2] tracking-[-0.5px] text-[var(--text-primary)] sm:text-[22px]">
          {section.title}
        </h3>
        {section.subtitle ? (
          <p className="mb-3 text-[15px] font-semibold text-white/70 sm:mb-4 sm:text-[17px]">
            {section.subtitle}
          </p>
        ) : null}
        <p className="text-[12.5px] leading-[1.7] text-white/45 sm:text-[13px]">
          {section.description}
        </p>
      </div>
    </div>
  );
}

function TextOnlySection({ section }: { section: ProjectSection }) {
  return (
    <div className="mb-8 border-b border-[var(--border-faint)] pb-8 last:mb-0 last:border-b-0 last:pb-0 sm:mb-10 sm:pb-10">
      <h3 className="mb-3 text-[15px] font-bold tracking-[-0.3px] text-[var(--text-primary)] sm:text-[16px]">
        {section.title}
      </h3>
      <p className="max-w-[520px] text-[12.5px] leading-[1.75] text-[var(--text-dim)] sm:text-[13px] sm:leading-[1.78]">
        {section.description}
      </p>
    </div>
  );
}

function renderSection(section: ProjectSection, index: number) {
  switch (section.type) {
    case "full-card":
      return <FullCardSection key={index} section={section} />;
    case "text-only":
      return <TextOnlySection key={index} section={section} />;
    default:
      return null;
  }
}

export function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);
  const project = projects.find((item) => item.id === id) as
    | ProjectDetail
    | undefined;

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(ref.current.querySelectorAll(".will-animate"), {
        opacity: 1,
        y: 0,
        clearProps: "all",
      });
      return;
    }
    const targets = ref.current.querySelectorAll(".will-animate");
    gsap.set(targets, { opacity: 0, y: 22 });
    gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      ease: "power3.out",
      stagger: 0.09,
      delay: 0.05,
    });
  }, [id]);

  if (!project) {
    return (
      <div className="page-shell text-[var(--text-dim)]">
        <p>Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-3 bg-transparent text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
        >
          Back to home
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} className="page-shell">
      <button
        className="will-animate mb-6 flex items-center gap-1.5 bg-transparent px-0 text-[13px] font-medium text-[var(--text-faint)] transition-colors hover:text-[var(--text-primary)] sm:mb-8"
        onClick={() => navigate(-1)}
      >
        <BackArrow />
        Back
      </button>

      <div className="will-animate mb-[10px]">
        <div className="mb-[10px] flex items-center gap-2">
          <span className="text-[var(--text-faint)]">
            {categoryIcon[project.category]}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[1px] text-[var(--text-faint)]">
            {project.categoryLabel}
          </span>
        </div>
        <h1 className="mb-2 text-[28px] font-bold leading-[1.08] tracking-[-0.6px] text-[var(--text-primary)] sm:text-[30px] md:text-[32px]">
          {project.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11.5px] text-[var(--text-meta)] sm:gap-x-4 sm:text-[12px]">
          <span>{project.year}</span>
          <span className="text-[var(--text-link-icon)]">·</span>
          <span>{project.role}</span>
          <span className="text-[var(--text-link-icon)]">·</span>
          <span>{project.tools.join(", ")}</span>
        </div>
      </div>
      <a
        href={project.projectUrl}
        onClick={(event) => event.stopPropagation()}
        className="will-animate mt-8 sm:mt-10"
      >
        {project.sections.map((section, index) =>
          renderSection(section, index),
        )}
      </a>
    </div>
  );
}
