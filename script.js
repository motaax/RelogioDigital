const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hour = dateToday.getHours()
    let minutes = dateToday.getMinutes()
    let seconds = dateToday.getSeconds()

    if (hour < 10) hour = '0' + hour

    if (minutes < 10) minutes = '0' + minutes

    if (seconds < 10) seconds = '0' + seconds

    horas.textContent = hour
    minutos.textContent = minutes
    segundos.textContent = seconds
})