const pContador = document.querySelector("p");

let cantClicks = 0;


function aumentarClick(){
    cantClicks++; //cantClcks = cantClicks + 1;
    pContador.innerHTML = cantClicks;
}

function restarClick(){
    cantClicks--;
    pContador.innerHTML = cantClicks;
}

function reiniciarContador() {
    cantClicks = 0;
    pContador.innerHTML = cantClicks;
}