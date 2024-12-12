var hora = Number(prompt("Digite uma hora e descubra se é Manhã, Tarde ou Noite"))

if(hora > 6 && hora < 12) {
    alert("Manhã")
}
else if(hora > 12 && hora < 18) {
    alert("Tarde")
}
else if(hora > 18 && hora < 24) {
    alert("Noite")
}
else {
    ("Madrugada")
}
