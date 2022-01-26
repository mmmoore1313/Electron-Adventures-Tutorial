let { readdir } = require("fs/promises")
let { contextBridge } = require("electron")

let directoryContents = async (path) => {
  let results = await readdir(path, {withFileTypes: true})
  return results.map(entry => ({
    name: entry.name,
    type: entry.isDirectory() ? "directory" : "file",
  }))
}

let currentDirectory = () => {
  return process.cwd()
}

contextBridge.exposeInMainWorld(
  "api", { directoryContents, currentDirectory }
)

// ep21: File Manager
// let { readdir } = require("fs/promises")
// let { contextBridge } = require("electron")
// 
// let directoryContents = async (path) => {
//   let results = await readdir(path, {withFileTypes: true})
//   return results.map(entry => ({
//     name: entry.name,
//     type: entry.isDirectory() ? "directory" : "file",
//   }))
// }
// 
// let currentDirectory = () => {
//   return process.cwd()
// }
// 
// contextBridge.exposeInMainWorld(
//   "api", { directoryContents, currentDirectory }
// )

// ep13: Svelte
// let child_process = require("child_process")
// let { contextBridge } = require("electron")
// 
// let runCommand = (command) => {
//   return child_process.execSync(command).toString().trim()
// }
// 
// contextBridge.exposeInMainWorld(
//   "api", { runCommand }
// )