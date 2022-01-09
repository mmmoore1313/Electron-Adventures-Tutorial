let data = new URLSearchParams(document.location.search)
let info = document.querySelector('#info')

for (const [key, value] of data) {
  let p = document.createElement("p")
  p.append(`${key} = ${value}`)
  info.append(p)
}

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
