//Trabalho feito por: Leonardo de Oliveira Laia, Lucas de Souza Arpini
// Descrição: Cálculo da altura total de um prédio com base na distância,
// altura do observador e ângulo de elevação utilizando trigonometria.

// Função responsável por obter o valor da altura informada pelo usuário
function getAltura(){
    let altura = document.getElementById("altura").value;
    return parseFloat(altura);
}

// Função responsável por obter o valor do ângulo informado pelo usuário
function getAngulo(){
    let angulo = document.getElementById("angulo").value;
    return parseFloat(angulo);
}


// Função responsável por obter o valor da distância informada pelo usuário
function getDistancia(){
    let distancia = document.getElementById("distancia").value;
    return parseFloat(distancia);
}


// Função principal responsável pelo cálculo da altura total do prédio
function calcula(){

    let altura = getAltura();
    let angulo = getAngulo();
    let distancia = getDistancia();

    
    // Local onde o resultado será exibido no HTML
    let local = document.getElementById("resp");

    // Conversão do ângulo de graus para radianos (necessário para usar Math.tan)
    let anguloRad = angulo * Math.PI / 180;

    // Cálculo da altura total utilizando a tangente: altura = distância * tan(ângulo) + altura do observador
    let resultado = distancia * Math.tan(anguloRad) + altura;

    //Exibe o resultado
    local.innerHTML = "A altura total do prédio é: " + resultado.toFixed(2) + " metros";
}