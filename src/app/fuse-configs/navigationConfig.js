// import { authRoles } from 'app/auth';
import { Menus } from 'app/auth/store/constants';
import i18next from 'i18next';
import en from './navigation-i18n/en';

i18next.addResourceBundle('en', 'navigation', en);

const navigationConfig = [
  {
    id: Menus.APP,
    title: 'Menus',
    translate: 'MENUS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: Menus.DASH,
        title: 'Dashbaord',
        translate: 'DASHH',
        type: 'item',
        icon: 'dashboard',
        url: '/app/dashboard/namal',
      },
    ],
  },
];

export default navigationConfig;
