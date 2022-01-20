let child_process = require("child_process")
let { contextBridge } = require("electron")

let runCommand = ({command, onout, onerr, ondone}) => {
  const proc = child_process.spawn(
    command,
    [],
    {
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
    },
  )
  proc.stdout.on("data", (data) => onout(data.toString()))
  proc.stderr.on("data", (data) => onerr(data.toString()))
  proc.on("close", (code) => ondone(code))
}

contextBridge.exposeInMainWorld(
  "api", { runCommand }
)

// episode 16: Streaming
// let child_process = require("child_process")
// let { contextBridge } = require("electron")
// 
// let runCommand = ({command, onout, onerr, ondone}) => {
//   const proc = child_process.spawn(
//     command,
//     [],
//     {
//       shell: true,
//       stdio: ["ignore", "pipe", "pipe"],
//     },
//   )
//   proc.stdout.on("data", (data) => onout(data.toString()))
//   proc.stderr.on("data", (data) => onerr(data.toString()))
//   proc.on("close", (code) => ondone(code))
// }
// 
// contextBridge.exposeInMainWorld(
//   "api", { runCommand }
// )

// episode 15: Async
//
// let child_process = require("child_process")
// let { contextBridge } = require("electron")
// 
// let runCommand = (command) => {
//   return new Promise((resolve, reject) => {
//     child_process.exec(command, (error, stdout, stderr) => {
//       resolve({stdout, stderr, error})
//     })
//   })
// }
// 
// contextBridge.exposeInMainWorld(
//   "api", { runCommand }
// )