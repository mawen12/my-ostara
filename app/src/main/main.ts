import { app, BrowserWindow } from 'electron';
import contextMenu from 'electron-context-menu';
import path from 'path';

// This is Electron 启动入口...

let mainWindow: BrowserWindow | null  = null;

const gotInstanceLock = app.requestSingleInstanceLock();

const createMainWindow = () => {

    // 上下文菜单
    contextMenu({
        showSaveImageAs: false,
        showCopyImage: false,
        showCopyLink: false,
        showServices: false,
        showSearchWithGoogle: false,
        showLookUpSelection: false,
        showLearnSpelling: false,
    })

    // 资源路径
    const RESOURCE_PATH = path.join(__dirname, "/assets")
    const getAssetPath = (...paths: string[]): string => {
        return path.join(RESOURCE_PATH, ...paths);
    }

    // 主窗口设置
    mainWindow = new BrowserWindow({
        show: true,
        width: 1440,
        height: 900,
        icon: getAssetPath('icon.png'),
        minWidth: 700,
        minHeight: 500,
        backgroundColor: "#161C24",
        frame: true,
        titleBarStyle: 'hidden',
        titleBarOverlay: { height: 40, color: '#161C24', symbolColor: '#212B36' },
        center: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    
    mainWindow.loadFile('index.html');

    mainWindow.on('ready-to-show', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined')
        }

        mainWindow.show();
        mainWindow.focus();
    })

    mainWindow.on('closed', () => {
        mainWindow = null;
    })


}

app.on('window-all-closed', () => {
    app.quit();
});

if (!gotInstanceLock) {
    app.quit();
} else {
    app
        .whenReady()
        .then(() => {
            createMainWindow();
        })
        .catch(console.log);

}

