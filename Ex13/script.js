var primeiroValor = Number(prompt("Digite o primeiro valor"))
var segundoValor = Number(prompt("Digite o segundo valor"))

var troca = primeiroValor

primeiroValor = segundoValor
segundoValor = troca 

alert (`Seu segundo número é "${primeiroValor}" E o seu primeiro fica "${segundoValor}" em ordem trocada`)