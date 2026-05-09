import elkonImg from "@/assets/elkonImg.png";
import qlhdImg from "@/assets/qlhdImg.png";
import todoImg from "@/assets/todoImg.png";
import zerekImg from "@/assets/zerekImg.png";
import type { ProjectCover } from "@/types";

export interface ProjectSection {
  type: "full-card" | "text-only";
  title: string;
  subtitle?: string;
  description: string;
  imageSrc?: string;
}

export interface ProjectDetail extends ProjectCover {
  year: string;
  role: string;
  tools: string[];
  sections: ProjectSection[];
}

export const projects: ProjectDetail[] = [
  {
    id: "zerek-edus",
    title: "Zerek Edus",
    subtitle: "Educational platform",
    imageSrc: zerekImg,
    category: "frontend",
    categoryLabel: "Frontend",
    description: "Образовательная платформа для онлайн-обучения",
    projectUrl: "https://www.zerek.edu.kz/",
    year: "2022 - 2023",
    role: "Frontend Developer",
    tools: ["Vue2", "JavaScript", "Vuetify", "HTML", "CSS"],
    sections: [
      {
        type: "full-card",
        title: "Онлайн-обучение",
        subtitle: "Интерактивные интерфейсы для учеников и преподавателей",
        imageSrc: zerekImg,
        description:
          "Участвовал в разработке фронтенд-части образовательной платформы Zerek для онлайн-обучения. Реализовывал пользовательские интерфейсы и интерактивные компоненты, чтобы сделать обучение удобнее для учеников и преподавателей.",
      },
      {
        type: "text-only",
        title: "Что было важно",
        description:
          "В проекте я фокусировался на понятной структуре экранов, адаптивности и удобном взаимодействии с интерфейсом. Задача заключалась в том, чтобы сделать сложный образовательный сценарий простым и удобным в использовании.",
      },
    ],
  },
  {
    id: "elkon-kz",
    title: "Elkon.kz",
    subtitle: "Corporate website",
    imageSrc: elkonImg,
    category: "frontend",
    categoryLabel: "Frontend",
    description: "Корпоративный сайт с адаптивной версткой и оптимизацией",
    projectUrl: "https://www.elkon.kz/",
    year: "2022 - 2023",
    role: "Frontend Developer",
    tools: ["HTML", "CSS", "JavaScript"],
    sections: [
      {
        type: "full-card",
        title: "Разработка с нуля",
        subtitle: "Адаптивный интерфейс и кроссбраузерность",
        imageSrc: elkonImg,
        description:
          "Разработал корпоративный сайт для Elkon KZ с нуля. Создал адаптивный интерфейс на HTML5, CSS3 и JavaScript, обеспечил кроссбраузерность и оптимизацию производительности.",
      },
      {
        type: "text-only",
        title: "Результат",
        description:
          "Проект требовал чистой и устойчивой фронтенд-реализации, где сайт одинаково хорошо работает на мобильных и десктопных устройствах. Основной акцент был на скорости, надежности и аккуратной подаче компании в вебе.",
      },
    ],
  },
  {
    id: "qalahood",
    title: "Qalahood",
    subtitle: "Custom merch platform",
    imageSrc: qlhdImg,
    category: "frontend",
    categoryLabel: "Fullstack Product",
    description: "Платформа для создания и заказа кастомного мерча",
    projectUrl: "https://www.qalahood.kz/",
    year: "2023 - настоящее время",
    role: "Предприниматель / Frontend Developer",
    tools: [
      "React",
      "TypeScript",
      "Tailwind",
      "Nest.js",
      "PostgreSQL",
      "Railway",
    ],
    sections: [
      {
        type: "full-card",
        title: "Конструктор и e-commerce",
        subtitle: "От идеи дизайна до оформления заказа",
        imageSrc: qlhdImg,
        description:
          "Qalahood — онлайн-платформа для создания и заказа кастомного мерча. Пользователи могут разрабатывать собственные дизайны одежды в удобном конструкторе и сразу оформлять заказ.",
      },
      {
        type: "text-only",
        title: "О проекте",
        description:
          "Проект объединяет функции визуального редактора и e-commerce, упрощая процесс создания уникального бренда или персонализированных вещей. Здесь особенно важны удобство интерфейса, логика пользовательского потока и гибкость продукта.",
      },
    ],
  },
  {
    id: "nFactorial",
    title: "nFactorial Project",
    subtitle: "Todo App",
    imageSrc: todoImg,
    category: "frontend",
    categoryLabel: "Frontend",
    description: "ToDo",
    projectUrl: "/project/nFactorial",
    year: "",
    role: "",
    tools: ["React", "JavaScript", "Tailwind"],
    sections: [
      {
        type: "full-card",
        title: "Todo App",
        subtitle: "CRUD, фильтрация и локальное хранение",
        imageSrc: todoImg,
        description:
          "Приложение ToDo, разработанное в рамках интенсива nFactorial School. Создано на React и JavaScript, включает CRUD-операции, фильтрацию задач и локальное хранение данных. В проекте использованы современные подходы React: хуки и композиция компонентов.",
      },
      {
        type: "text-only",
        title: "Практика React",
        description:
          "Этот проект был сфокусирован на базовой архитектуре интерфейса, управлении состоянием и удобном пользовательском сценарии для повседневных задач.",
      },
    ],
  },
];
