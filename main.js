const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1400, height: 900, backgroundColor: '#1e1f24', title: 'SilverPaint',
    autoHideMenuBar: true, webPreferences: { contextIsolation: true, sandbox: false, spellcheck: false, preload: path.join(__dirname, 'preload.js') }
  });
  win.maximize();
  win.loadFile('index.html');
  // F11 = tela cheia
  win.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); }
  });
}
Menu.setApplicationMenu(null);
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
