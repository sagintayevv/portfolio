export interface SkillGroup {
  title: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  bullets: string[];
}

export const profileSummary =
  'Я Frontend Developer и выпускник nFactorial School с опытом работы в React, TypeScript и современных веб-технологиях. Разрабатывал адаптивные образовательные платформы, корпоративные сайты и продуктовые сервисы. Люблю создавать понятные интерфейсы и писать чистый, поддерживаемый код.';

export const skillGroups: SkillGroup[] = [
  {
    title: "Навыки и технологии",
    description:
      "Основной стек и инструменты, которые я использую для разработки современных и адаптивных веб-интерфейсов.",
    items: [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Vue2',
      'HTML',
      'CSS',
      'Vuetify',
      'Tailwind CSS',
      'Nest.js',
      'PostgreSQL',
      'Railway',
      'Git',
      'REST API',
      'GSAP',
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: 'Qalahood',
    role: 'Founder (Frontend Developer)',
    location: 'Казахстан, Астана',
    period: '2023 - настоящее время',
    summary:
      'Развиваю собственные цифровые продукты и участвую в проектировании пользовательского опыта, структуры интерфейсов и онлайн-присутствия.',
    bullets: [
      'Работаю над развитием продукта от идеи до визуальной реализации.',
      'Фокусируюсь на понятных интерфейсах, адаптивности и общей целостности пользовательского опыта.',
      'Принимаю решения по структуре, подаче и развитию цифровых решений, включая платформу Qalahood.',
    ],
  },
  {
    company: 'Mediana Services Limited',
    role: 'Frontend Developer',
    location: 'Казахстан, Актау',
    period: '2022 - 2023',
    summary:
      'Разрабатывал интерфейсы и адаптивные веб-страницы, включая образовательные платформы и корпоративные сайты.',
    bullets: [
      'Участвовал в разработке платформы Zerek Edus и корпоративного сайта Elkon.kz.',
      'Реализовывал адаптивную верстку, интерфейсы и интеграции с API для продуктовых задач.',
      'Уделял внимание чистоте кода, понятной архитектуре компонентов и качеству интерфейсов.',
    ],
  },
];
