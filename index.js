// episode 6: Use D3 to Visualize Free Disk Space
let child_process = require("child_process")
let { app, BrowserWindow } = require("electron")

let runCommand = (command) => {
  return child_process.execSync(command).toString().trim()
}

function df() {
  let output = runCommand("df -kP")
  let rows = output
    .split(/[\r\n]+/)
    .slice(1)
  return rows.map(row => (
    row
      .replace(/\s+(\d+)/g, '\t$1')
      .replace(/\s+\//g, '\t/')
      .split(/\t/)
  ))
}

function createWindow() {
  let payload = JSON.stringify(df())
  let win = new BrowserWindow({})
  win.maximize()
  win.loadFile('index.html') // loads the html in the index.html

  win.webContents.on('did-finish-load', function () {
    win.webContents.executeJavaScript(`displayFreeDiskSpace(${payload})`)
  })
}


app.on("ready", createWindow)

app.on("window-all-closed", () => {
  app.quit()
})

// episode 5: Display Free Disk Space
// 
// let child_process = require("child_process")
// let { app, BrowserWindow } = require("electron")
// 
// let runCommand = (command) => {
//   return child_process.execSync(command).toString().trim()
// }
// 
// function df() {
//   let output = runCommand("df -kP")
//   let rows = output
//     .split(/[\r\n]+/)
//     .slice(1)
//   return rows.map(row => (
//     row
//       .replace(/\s+(\d+)/g, '\t$1')
//       .replace(/\s+\//g, '\t/')
//       .split(/\t/)
//   ))
// }
// 
// function createWindow() {
//   let payload = JSON.stringify(df())
//   let win = new BrowserWindow({})
//   win.maximize()
//   win.loadFile('index.html') // loads the html in the index.html
// 
//   win.webContents.on('did-finish-load', function () {
//     win.webContents.executeJavaScript(`displayFreeDiskSpace(${payload})`)
//   })
// }
// 
// 
// app.on("ready", createWindow)
// 
// app.on("window-all-closed", () => {
//   app.quit()
// })


// episode 4: Image Gallery with Dynamic HTML
// let fs = require("fs")
// let path = require("path")
// let { app, BrowserWindow } = require("electron")
// 
// let imageDir
// let argv = process.argv
// 
// if (argv.length >= 3) {
//   imageDir = argv[2]
// } else {
//   imageDir = `${__dirname}/images`
// }
// 
// let findImages = (dir) => {
//   let files = fs.readdirSync(dir)
//   files.sort()
//   return files
//     .filter(x => /\.(png|jpg|jpeg|gif)/i.test(x))
//     .map(x => path.join(dir, x))
// }
// 
// let html = `
// <!DOCTYPE html>
// <html>
//   <head>
//     <style>
//       body { 
//         background-color: black;
//         color: white;
//       }
//       img {
//         padding: 10px;
//       }
//     </style>
//   </head>
//   <body>
//     <h1>Welcome to the Internet!</h1>
//     <h2>Image Gallery</h2>
//     ${ findImages(imageDir).map(x => `<img src="file://${x}" />`).join("") }
//   </body>
// </html>
// `
// 
// function createWindow() {
//   let win = new BrowserWindow({webPreferences: { webSecurity: false }})
//   win.maximize()
//   win.loadURL(`data:text/html;charset=utf-8,${encodeURI(html)}`) // reads the html variable from above
// }
// 
// app.on("ready", createWindow)
// 
// app.on("window-all-closed", () => {
//   app.quit()
// })

// episode3: What Can Backend Code Even Do?
// let child_process = require("child_process")
// let { app, BrowserWindow } = require("electron")
// 
// 
// let runCommand = (command) => {
//   return child_process.execSync(command).toString().trim()
// }
// 
// // communicate with the front end
// let toQueryString = (obj) => {
//   let q = []
//   for (let key in obj) {
//     q.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
//   }
//   return q.join("&")
// }
// 
// 
// // retrieve operating information
// let sysInfo = {
//   os: runCommand("uname -s"),
//   cpu: runCommand("uname -m"),
//   hostname: runCommand("hostname -s"),
//   ip: runCommand("ipConfig getifaddr en0"),
// }
// 
// function createWindow() {
//   let win = new BrowserWindow({})
//   win.maximize()
//   win.loadFile(`file:${__dirname}/index.html?${toQueryString(sysInfo)}`) // finds the index.html in any directory
// }
// 
// app.on("ready", createWindow)
// 
// app.on("window-all-closed", () => {
//   app.quit()
// })

// episode 2
// 
// let { app, BrowserWindow } = require("electron")
// 
// function createWindow() {
//   let win = new BrowserWindow({})
//   win.maximize()
//   win.loadFile("index.html")
// }
// 
// app.on("ready", createWindow)
// 
// app.on("window-all-closed", () => {
//   app.quit()
// })

