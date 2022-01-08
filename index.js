// let child_process = require("child_process")
let { app, BrowserWindow } = require("electron")

let html = `
<!DOCTYPE html>
<html>
  <body>
    <h1>Welcome to the Internet!</h1>
  </body>
</html>
`
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

function createWindow() {
  let win = new BrowserWindow({})
  win.maximize()
  win.loadFile(`data:text/html;charset=utf-8,${encodeURI(html)}`) // reads the html variable from above
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  app.quit()
})