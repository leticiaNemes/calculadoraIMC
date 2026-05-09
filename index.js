let peso = document.getElementById("peso")
let altura = document.getElementById('altura')
let resultado = document.getElementById("resultado")
let botao = document.getElementById('botao')
let classificacao = " ";


botao.onclick = () => {
    let imc = Number(peso.value) / Number(altura.value*altura.value);
if(imc < 18.5){
    classificacao = "Abaixo do peso"
}else if ((imc >= 18.50) && (imc < 24.9)){
    classificacao = "Peso Normal"
}else if ((imc >= 24.9) && (imc < 29.9)){
    classificacao + "Sobrepeso"
}else if ((imc >= 29.9) && (imc < 34.9)){
    classificacao = "Obesidade I"
}else if ((imc >= 34.9) && (imc < 39.9)){
    classificacao = "Obesidade II"
}else if ((imc >= 18.50) && (imc < 24.5)){ 
    classificacao = "Peso Normal"
}else{ 
    classificacao = "Obesidade III"
}
resultado.innerText = `Seu IMC é: ${imc} \n Classificação: ${classificacao}`
}
