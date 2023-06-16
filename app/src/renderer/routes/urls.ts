export type UrlInfo = {
  url: string;
  path: string;
  helpUrl?: string;
  redirect?: boolean;
};

function asUrlInfo<T extends { [key: string]: UrlInfo }>(arg: T): T {
  return arg;
}

export const urls = asUrlInfo({
  error: {
    url: '/error',
    path: 'error',
  },
  // Navigator Root
  navigator: {
    url: '/navigator',
    path: 'navigator',
    redirect: true,
  },
  home: {
    url: '/navigator/home',
    path: 'home',
  },
  dashboard: {
    url: '/navigator/dashboard',
    path: 'dashboard',
  },
  // Folder Root
  folder: {
    url: '/navigator/folder/:id',
    path: 'folder/:id',
    redirect: true,
  },
  folderApplications: {
    url: '/navigator/folder/:id/applications',
    path: 'applications',
    helpUrl: 'https://docs.ostara.dev/documentation/folders',
  },
  // Application Root
  application: {
    url: '/navigator/application/:id',
    path: 'application/:id',
    redirect: true,
  },
  // Instance Root
  instance: {
    url: '/navigator/instance/:id',
    path: 'instance/:id',
    redirect: true,
  },
  // Settings Root
  settings: {
    url: '/settings',
    path: 'settings',
    redirect: true,
  },
  settingsGeneral: {
    url: '/settings/general',
    path: 'general',
  },
});
