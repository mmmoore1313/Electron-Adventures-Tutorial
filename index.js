let { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 500px,
    height: 500px,
    wePreferences: {
      preload: `${__dirname}/preload.js`,
    }
  })
  
  win.loadURL('http://localhost:3000/')
}

app.om('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})