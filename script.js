//Trabalho feito por: Leonardo de Oliveira Laia, Lucas de Souza Arpini

function getAltura(){
    let altura = document.getElementById("altura").value;
    return parseFloat(altura);
}

function getAngulo(){
    let angulo = document.getElementById("angulo").value;
    return parseFloat(angulo);
}

function getDistancia(){
    let distancia = document.getElementById("distancia").value;
    return parseFloat(distancia);
}

function calcula(){

    let altura = getAltura();
    let angulo = getAngulo();
    let distancia = getDistancia();
    let local = document.getElementById("resp");

    let anguloRad = angulo * Math.PI / 180;

    let resultado = distancia * Math.tan(anguloRad) + altura;

    local.innerHTML = "A altura total do prédio é: " + resultado.toFixed(2) + " metros";
}