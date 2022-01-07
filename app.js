let counter = 0
let div = document.querySelector('#counter')
let button = document.querySelector('button')

let updateCounter = () => {
  div.innerHTML = `You clicked the button ${counter}`
}

button.addEventListener('click', () => {
  counter++
  updateCounter()
})

updateCounter()