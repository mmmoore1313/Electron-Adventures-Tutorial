let { app, BrowserWindow } = require('electron')
let win

function createWindow() {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  win.loadFile("index.html")
}

app.on("ready", createWindow)
app.on("window-all-closed", () => {
  app.quit()
})

let readline = require("readline")

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on("line", async (line) => {
  win.webContents.send("line", line)
})
// ep 19 Data 2 Front End
// let { app, BrowserWindow } = require('electron')
// let win
// 
// function createWindow() {
//   win = new BrowserWindow({
//     webPreferences: {
//       nodeIntegration: true,
//       contextIsolation: false,
//     }
//   })
//   win.loadFile("index.html")
// }
// 
// app.on("ready", createWindow)
// app.on("window-all-closed", () => {
//   app.quit()
// })
// 
// let readline = require("readline")
// 
// let rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// })
// 
// rl.on("line", async (line) => {
//   win.webContents.send("line", line)
// })