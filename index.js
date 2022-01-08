let child_process = require("child_process")
let { app, BrowserWindow } = require("electron")


let runCommand = (command) => {
  return child_process.execSync(command).toString().trim()
}

// communicate with the front end
let toQueryString = (obj) => {
  let q = []
  for (let key in obj) {
    q.push(`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
  }
  return q.join("&")
}


// retrieve operating information
let sysInfo = {
  os: runCommand("uname -s"),
  cpu: runCommand("uname -m"),
  hostname: runCommand("hostname -s"),
  ip: runCommand("ipConfig getifaddr en0"),
}

function createWindow() {
  let win = new BrowserWindow({})
  win.maximize()
  win.loadFile(`file:${__dirname}/index.html?${toQueryString(sysInfo)}`) // finds the index.html in any directory
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  app.quit()
})