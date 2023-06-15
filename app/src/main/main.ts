/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow } from 'electron';
import contextMenu from 'electron-context-menu';
import { resolveHtmlPath } from './util';
import MenuBuilder from './menu';

let mainWindow: BrowserWindow | null = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const createMainWindow = () => {
  contextMenu({
    showSaveImageAs: false,
    showCopyImage: false,
    showCopyLink: false,
    showServices: false,
    showSearchWithGoogle: false,
    showLookUpSelection: false,
    showLearnSpelling: false,
  });

  const isMac = process.platform === 'darwin';
  const isWindows = process.platform === 'win32';

  const RESOURCE_PATH = path.join(process.resourcesPath, 'assets');
  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCE_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: true,
    width: 1440,
    height: 900,
    icon: getAssetPath('icon.png'),
    minWidth: 700,
    minHeight: 500,
    backgroundColor: '#ffffff',
    frame: isMac,
    titleBarStyle: isMac ? 'hidden' : undefined,
    titleBarOverlay: isMac
      ? {
          height: 40 + (isWindows ? -1 : 0),
          color: '#ffffff',
          symbolColor: '#212B36',
        }
      : undefined,
    webPreferences: {
      preload: path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  // 监听 ready-to-show 事件
  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    mainWindow.show();
    mainWindow.focus();
  });

  // 监听 closed 事件
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 展示菜单栏
  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();
};

app.on('window-all-closed', () => {
  app.quit();
});

app
  .whenReady()
  .then(() => createMainWindow())
  .catch(console.log);
