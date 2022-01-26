let { ipcRenderer } = require('electron')
let messages = document.querySelector('#messages')

ipcRenderer.on("line", (event, line) => {
  let message = document.createElement("div")
  message.textContent = line
  messages.appendChild(message)
})
// ep19 Data to Front End
// let { ipcRenderer } = require('electron')
// let messages = document.querySelector('#messages')
// 
// ipcRenderer.on("line", (event, line) => {
//   let message = document.createElement("div")
//   message.textContent = line
//   messages.appendChild(message)
// })