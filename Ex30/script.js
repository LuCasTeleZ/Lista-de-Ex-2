var idadeUm = Number(prompt("Digite a primeira idade"))
var idadeDois = Number(prompt("Digite a segunda idade"))

if(idadeUm == idadeDois){
    alert("Os dois usuários tem a mesma idade")
}
else if(idadeUm > idadeDois){
    alert("O primeiro usuário é mais velho")
}
else{
    alert("O segundo usuário é mais velho")
}