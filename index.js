const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let minu = dateToday.getMinutes();
    let sec = dateToday.getSeconds();


    horas.innerText = hr;
    minutos.innerText = minu;
    segundos.innerText = sec;


});

