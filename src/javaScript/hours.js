const hours = document.getElementById('timeHours')
const minutes  =  document.getElementById('timeMinutes')
const seconds = document.getElementById('timeSegundos')

const clock =  setInterval(function time(){
    const date = new Date()

    let hrs = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hours.textContent = hrs
    minutes.textContent = min
    seconds.textContent = sec
})