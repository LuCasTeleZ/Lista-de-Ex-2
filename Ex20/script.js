var primeiro = Number(prompt("Digite o Primeiro número para formatá-lo"))
alert(`O valor formatado = ${primeiro.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}`)