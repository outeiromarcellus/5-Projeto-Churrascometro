// Carne- 400gr por pessoa + de 6 horas -650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refri/agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem pro 0.5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
  console.log('calculando...'); //let para pegar o valor que o usuario escrever

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qntTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas;

  let qntTotalCerveja = cervejaPP(duracao) * adultos;

  let qntTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas;

  //uam vez que calculei tudo posso colocar eles no resultado

  Resultado.innerHTML = `<p>${qntTotalCarne / 1000} Kg de Carne<p>`; //estou atribuindo tudo isso a innerhtml
  Resultado.innerHTML += `<p>${Math.ceil(
    qntTotalCerveja / 600
  )} Garrafas de Cervejas<p>`; //recebendo o innerhtml + oq tem aqui agora
  Resultado.innerHTML += `<p>${Math.ceil(
    qntTotalBebidas / 2000
  )} Litros de Outras Bebidas<p>`; //recebendo o innerhtml + oq tem aqui agora
}

function carnePP(duracao) {
  // passei os parametros para >= 6 horas, se nao 400
  if (duracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
