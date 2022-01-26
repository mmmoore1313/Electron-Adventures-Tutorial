let path = require("path")
let { readdir, stat, readlink } = require("fs/promises")
let { contextBridge } = require("electron")

let fileInfo = async (basePath, entry) => {
  let {name} = entry
  let fullPath = path.join(basePath, name)
  let linkTarget = null
  let fileStat


  if (entry.isSymbolicLink()) {
    linkTarget = await readlink(fullPath)
  }

  // this is for broken symlinks, and is a protection against deleted files
  try {
    fileStat = await stat(fullPath)
  } catch {
    return {
      name,
      type: "broken",
      linkTarget,
    }
  }

  let {size, mtime} = fileStat

  if (fileStat.isDirectory()) {
    return {
      name,
      type: "directory",
      mtime,
      linkTarget,
    }
  } else if (fileStat.isFile()) {
    return {
      name,
      linkTarget,
      type: "file",
      size,
      mtime,
      linkTarget,
    }
  } else {
    return {
      name,
      type: "special",
    }
  }
}

let directoryContents = async (path) => {
  let results = await readdir(path, {withFileTypes: true})
  return await Promise.all(results.map(entry => fileInfo(path, entry)))
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