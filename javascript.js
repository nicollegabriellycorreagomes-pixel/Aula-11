function calcular(){
    var numero1 = parseFloat(document.getElementById('num1').value)
    var numero2 = parseFloat(document.getElementById('num2').value)
    var numero3 = parseFloat(document.getElementById('num3').value)
    var numero4 = parseFloat(document.getElementById('num4').value)
    var soma = (numero1+numero2+numero3+numero4)/4


if(soma >= 7){
    document.getElementById('resultado').innerHTML = "Média: "+soma+" foi aprovado"
}else if (soma <= 5) {
    document.getElementById('resultado').innerHTML = "Média: "+soma+" foi reprovado"
} else {
    document.getElementById('resultado').innerHTML = "Média: "+soma+" ficou em recuperação"
}

}