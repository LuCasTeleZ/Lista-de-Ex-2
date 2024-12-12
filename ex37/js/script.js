var btnMais = document.querySelector("#soma")
var btnMenos = document.querySelector("#subtracao")
var Res = document.querySelector("#res")
var contador = 0

function incremento(){
contador++
Res.innerText = contador
limiter()
}

function decremento(){
    contador--
    Res.innerText = contador
    limiter()
}

function limiter(){
    if (contador == 0){
        btnMenos.setAttribute("disabled","")
    }else{
        btnMenos.removeAttribute("disabled","")
    }
       
}
limiter()

btnMais.addEventListener("click",incremento)
btnMenos.addEventListener("click",decremento)