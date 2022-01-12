// app.js is the JS that runs the frontend
// episode 11: JQuery
function appendInput(command) {
  let e = $(
    `
      <div class='input-line'>
        <span class='prompt'>$</span>
        <span class='input'></span>
      </div>
    `
  )
  e.find('.input').text(command)
  $('#history').append(e)
}

function appendOutput(output) {
  let e = $(`<div class='output'></div>`)
  e.text(output)
  $('#history').append(e)
}

$('form').on('submit', function(e) {
  e.preventDefault()
  let command = $('input').val()
  let output = window.api.runCommand(command)
  appendInput(command)
  appendOutput(output)
  $('input').val('')
  $('input')[0].scrollIntoView()
})
// episode 10: Preload Script
// let form = document.querySelector("form")
// let input = document.querySelector("input")
// let terminalHistory = document.querySelector("#history")
// 
// function createInputLine(command) {
//   let inputLine = document.createElement("div")
//   inputLine.className = "input-line"
// 
//   let promptSpan = document.createElement("span")
//   promptSpan.className = "prompt"
//   promptSpan.append("$")
//   let inputSpan = document.createElement("span")
//   inputSpan.className = "input"
//   inputSpan.append(command)
// 
//   inputLine.append(promptSpan)
//   inputLine.append(inputSpan)
// 
//   return inputLine
// }
// 
// function createTerminalHistoryEntry(command, commandOutput) {
//   let inputLine = createInputLine(command)
//   let output = document.createElement("div")
//   output.className = "output"
//   output.append(commandOutput)
//   terminalHistory.append(inputLine)
//   terminalHistory.append(output)
// }
// 
// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   let command = input.value
//   let output = window.api.runCommand(command)
//   createTerminalHistoryEntry(command, output)
//   input.value = ""
//   input.scrollIntoView()
// })

// episode 9: Terminal App   
// let child_process = require("child_process")
// 
// let form = document.querySelector("form")
// let input = document.querySelector("input")
// let terminalHistory = document.querySelector("#history")
// 
// function createInputLine(command) {
//   let inputLine = document.createElement("div")
//   inputLine.className = "input-line"
// 
//   let promptSpan = document.createElement("span")
//   promptSpan.className = "prompt"
//   promptSpan.append("$")
//   let inputSpan = document.createElement("span")
//   inputSpan.className = "input"
//   inputSpan.append(command)
// 
//   inputLine.append(promptSpan)
//   inputLine.append(inputSpan)
// 
//   return inputLine
// }
// 
// function createTerminalHistoryEntry(command, commandOutput) {
//   let inputLine = createInputLine(command)
//   let output = document.createElement("div")
//   output.className = "output"
//   output.append(commandOutput)
//   terminalHistory.append(inputLine)
//   terminalHistory.append(output)
// }
// 
// form.addEventListener("submit", (e) => {
//   e.preventDefault()
//   let command = input.value
//   let output = child_process.execSync(command).toString().trim()
//   createTerminalHistoryEntry(command, output)
//   input.value = ""
//   input.scrollIntoView()
// })

// episode 8: Terminal App Styling
// syling was done mainly in the index.html and the app.css

// episode 7: Visualize Free Disk Space in Terminal
// episode7 was a run through of terminal visualization with Ruby

// episode 6: Use D3 to Visualize Free Disk Space
// function displayFreeDiskSpace(data) {
//   let info = d3.select("#info")
// 
//   for (let row of data) {
//     let total = parseInt(row[1])
//     let used = parseInt(row[2])
//     let free = total - used
//     let path = row[5]
// 
//     let data = { free, used }
// 
//     let div = info.append("div")
//     div.append("h3").text(path)
// 
//     let svg = div
//       .append("svg")
//       .attr("width", "100px")
//       .attr("height", "100px")
//     let g = svg
//       .append("g")
//       .attr("transform", "translate(50,50)")
// 
//     let pie = d3.pie().value(d => d[1])
//     let pieData = pie(Object.entries(data))
//     let color = d3
//       .scaleOrdinal()
//       .domain(["used", "free"])
//       .range(["red", "green"])
// 
//     g
//       .selectAll("path")
//       .data(pieData)
//       .enter()
//       .append("path")
//       .attr("d", d3.arc()
//         .innerRadius(0)
//         .outerRadius(45)
//       )
//       .attr("fill", d => color(d.data[0]))
//       .attr("stroke", "black")
//       .style("stroke-width", "2px")
//       .style("opacity", 0.7)
//   }
// }

// episode 5: Display Free Disk Space
// function displayFreeDiskSpace(data) {
//   let info = document.querySelector("#info")
// 
//   for (let row of data) {
//     let total = parseInt(row[1])
//     let used = parseInt(row[2])
//     let path = row[5]
//     let percent
//     if (total !== 0) {
//       percent = Math.round(100 * used / total)
//     } else {
//       percent = 0
//     }
//     let div = document.createElement("div")
//     div.append(`${path}: ${percent}% used (${used}/${total})`)
//     info.append(div)
//   }
// }

// episode 4: Image Gallery with Dynamic HTML
// Didn't do very much with the app.js here; all of the programming is found in the index.js

// episode3: What Can BAckend Code Even Do?
// let data = new URLSearchParams(document.location.search)
// let info = document.querySelector('#info')
// 
// for (const [key, value] of data) {
//   let p = document.createElement("p")
//   p.append(`${key} = ${value}`)
//   info.append(p)
// }

// episode 2: Frontend Code and BAckend code
// let counter = 0
// let div = document.querySelector('#counter')
// let button = document.querySelector('button')
// 
// let updateCounter = () => {
//   div.innerHTML = `You clicked the button ${counter}`
// }
// 
// button.addEventListener('click', () => {
//   counter++
//   updateCounter()
// })
// 
// updateCounter()