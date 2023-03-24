import { lazy } from 'react';

const ProjectDashboardAppConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: true,
        },
        toolbar: {
          display: true,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  routes: [
    {
      path: '/app/dashboard/namal',
      component: lazy(() => import('./ProjectDashboardApp')),
    },
  ],
};

export default ProjectDashboardAppConfig;
