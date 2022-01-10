// episode 10: Preload Script
let child_process = require('child_process')
let { contextBridge } = require('electron')

let runCommand = (command) => {
  return child_process.execSync(command).toString().trim()
}

contextBridge.exposeInMainWorld(
  'api', { runCommand }
)