import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  // {
  //   path: 'Document-Storage',
  //   title: 'ASSIGNED_DOCUMENTS',
  //   icon: 'list',
  //   class: '',
  //   groupTitle: false,
  //   claims: [],
  //   submenu: [],
  // },
  {
    path: 'All-Documents',
    title: 'ALL_DOCUMENTS',
    icon: 'file-text',
    class: '',
    groupTitle: false,
    claims: ['ALL_DOCUMENTS_VIEW_DOCUMENTS'],
    submenu: [],
  },
  {
    path: 'document-home',
    title: 'Document Home',
    icon: 'file-text',
    class: '',
    groupTitle: false,
    claims: [],
    submenu: [],
  },
  {
    path: 'document-categories',
    title: 'DOCUMENT_CATEGORIES',
    icon: 'file',
    class: '',
    groupTitle: false,
    claims: ['DOCUMENT_CATEGORY_MANAGE_DOCUMENT_CATEGORY'],
    submenu: [],
  },
  {
    path: 'document-audit-trail',
    title: 'DOCUMENTS_AUDIT_TRAIL',
    icon: 'activity',
    class: '',
    groupTitle: false,
    claims: ['DOCUMENT_AUDIT_TRAIL_VIEW_DOCUMENT_AUDIT_TRAIL'],
    submenu: [],
  },
  {
    path: 'roles',
    title: 'ROLES',
    icon: 'users',
    class: '',
    groupTitle: false,
    claims: ['ROLE_VIEW_ROLES'],
    submenu: [],
  },
  {
    path: 'users',
    title: 'USERS',
    icon: 'user',
    class: '',
    groupTitle: false,
    claims: ['USER_VIEW_USERS'],
    submenu: [],
  },
  {
    path: 'reminder',
    title: 'REMINDER',
    icon: 'bell',
    class: '',
    groupTitle: false,
    claims: ['REMINDER_VIEW_REMINDERS'],
    submenu: [],
  },
  {
    path: 'login-audits',
    title: 'LOGIN_AUDITS',
    icon: 'log-in',
    class: '',
    groupTitle: false,
    claims: ['LOGIN_AUDIT_VIEW_LOGIN_AUDIT_LOGS'],
    submenu: [],
  },
  {
    path: '',
    title: 'SETTINGS',
    icon: 'settings',
    class: 'menu-toggle',
    groupTitle: false,
    claims: ['EMAIL_MANAGE_SMTP_SETTINGS', 'SETTING_MANAGE_PROFILE', 'SETTING_MANAGE_LANGUAGE'],
    submenu: [
      {
        path: 'smtp-setting',
        title: 'SMTP_SETTING',
        icon: 'mail',
        class: 'ml-menu',
        groupTitle: false,
        claims: ['EMAIL_MANAGE_SMTP_SETTINGS'],
        submenu: [],
      },
      {
        path: 'company-profile',
        title: 'COMPANY_PROFILE',
        icon: 'mail',
        class: 'ml-menu',
        groupTitle: false,
        claims: ['SETTING_MANAGE_PROFILE'],
        submenu: [],
      },
      {
        path: 'languages',
        title: 'LANGUAGES',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: [],
        claims: ['SETTING_MANAGE_LANGUAGE'],
      },
    ],
  },
];
