// episode 6: Use D3 to Visualize Free Disk Space
function displayFreeDiskSpace(data) {
  let info = document.querySelector("#info")

  for (let row of data) {
    let total = parseInt(row[1])
    let used = parseInt(row[2])
    let path = row[5]
    let percent
    if (total !== 0) {
      percent = Math.round(100 * used / total)
    } else {
      percent = 0
    }
    let div = document.createElement("div")
    div.append(`${path}: ${percent}% used (${used}/${total})`)
    info.append(div)
  }
}

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