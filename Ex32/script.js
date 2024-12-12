var peso = Number(prompt("Digite seu peso para descobrir o seu IMC"))
var altura = Number(prompt("Agora digite sua altura"))
var imc = peso / (altura ** 2)

if(imc < 18.5) {
    alert("Você está abaixo do peso")
}
else if(imc <= 24.9 ) {
    alert ("Você está saudável")
}
else if (imc <= 29.9 ) {
    alert("Você está sobrepeso")
}
else if (imc >= 30) {
    alert("ALERTA DE GORDOOOO")
}
