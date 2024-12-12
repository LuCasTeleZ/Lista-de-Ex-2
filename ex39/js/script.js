var n1 = document.querySelector("#N1")
var n2 = document.querySelector("#N2")
var btnSomar = document.querySelector("#somar")
var btnSubtrair = document.querySelector("#subtrair")
var btnMultiplicar = document.querySelector("#multiplicar")
var btnDividir = document.querySelector("#dividir")

var res = document.querySelector("#res")

btnSomar.addEventListener("click",soma)

btnSubtrair.addEventListener("click",subtrair)

btnMultiplicar.addEventListener("click",multiplicar)

btnDividir.addEventListener("click",dividir)

function soma(){
    var numero1Convertido = Number(n1.value)
    var numero2Convertido = Number(n2.value)
    var soma = numero1Convertido + numero2Convertido
    
    res.innerText = soma
}



function subtrair(){
    var numero1Convertido = Number(N1.value)
    var numero2Convertido = Number(N2.value)
    var soma = numero1Convertido - numero2Convertido
    res.innerText = subtrair
}

function multiplicar(){
    var numero1Convertido = Number(N1.value)
    var numero2Convertido = Number(N2.value)
    var soma = numero1Convertido * numero2Convertido
    res.innerText = multiplicar
}

function dividir(){
    var numero1Convertido = Number(N1.value)
    var numero2Convertido = Number(N2.value)
    var soma = numero1Convertido / numero2Convertido
    res.innerText = dividir
}