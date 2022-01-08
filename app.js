let counter = 0
let div = document.querySelector('#counter')
let button = document.querySelector('button')
let data = new URLSearchParams(document.location.search)
let info = document.querySelector('#info')

let updateCounter = () => {
  div.innerHTML = `You clicked the button ${counter}`
}

button.addEventListener('click', () => {
  counter++
  updateCounter()
})
updateCounter()

for (const [key, value] of data) {
  let p = document.createElement("p")
  p.append(`${key} = ${value}`)
  info.append(p)
}
