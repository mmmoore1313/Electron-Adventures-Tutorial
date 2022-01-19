let { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 900, 
    height: 680,
    webPreferences: {
      preload: `${__dirname}/preload.js`
    },
  })
  win.loadURL("http://localhost:8080/")
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})