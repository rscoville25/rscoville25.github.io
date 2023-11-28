import './index.css'

const darkButton = document.getElementById('dark')
darkButton.addEventListener('click', darkMode)
let lights = true
function darkMode() {
    if (!lights) {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        lights == true
    } else if(lights) {
        document.body.style.backgroundColor = 'darkgrey'
        document.body.style.color = 'white'
        lights == false
    }
}