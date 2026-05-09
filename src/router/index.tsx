import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/Layout';
import {
  ExperiencePage,
  HomePage,
  ProjectsPage,
  SkillsPage,
} from '@/components/Pages';
import { ProjectDetailPage } from '@/components/Pages/ProjectDetailPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'experience', element: <ExperiencePage /> },
      { path: 'project/:id', element: <ProjectDetailPage /> },
    ],
  },
]);
