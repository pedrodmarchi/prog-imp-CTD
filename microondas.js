// Avaliação Checkpoint 2 - Progamação Imperativa - 28/06/2021
// Pedro D'Umbra de Marchi 


// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

let microondas = (receita, tempo) => {

  const pipoca = (tempo = 10) => {
    if (tempo >= 10 && tempo < 20) {
      return console.log('Prato pronto, bom apetite!!!');
    } else if (tempo < 10) {
      return console.log('Tempo insuficiente');
    } else if (tempo > 20 && tempo < 30) {
      return console.log('Queimou');
    } else if (tempo >= 30) {
      return console.log('KABUMM');
    } 
  }

  const macarrao = (tempo = 8) => {
    if (tempo >= 8 && tempo < 16) {
      return console.log('Prato pronto, bom apetite!!!');
    } else if (tempo < 8) {
      return console.log('Tempo insuficiente');
    } else if (tempo > 16 && tempo < 24) {
      return console.log('Queimou');
    } else if (tempo >= 24) {
      return console.log('KABUMM');
    } 
  }

  const brigadeiro = (tempo = 8) => {
    if (tempo >= 8 && tempo < 16) {
      return console.log('Prato pronto, bom apetite!!!');
    } else if (tempo < 8) {
      return console.log('Tempo insuficiente');
    } else if (tempo > 16 && tempo < 24) {
      return console.log('Queimou');
    } else if (tempo >= 24) {
      return console.log('KABUMM');
    } 
  }

  const carne = (tempo = 15) => {
    if (tempo >= 15 && tempo < 30) {
      return console.log('Prato pronto, bom apetite!!!');
    } else if (tempo < 15) {
      return console.log('Tempo insuficiente');
    } else if (tempo > 30 && tempo < 45) {
      return console.log('Queimou');
    } else if (tempo >= 45) {
      return console.log('KABUMM');
    } 
  }

  const feijao = (tempo = 12) => {
    if (tempo >= 12 && tempo < 24) {
      return console.log('Prato pronto, bom apetite!!!');
    } else if (tempo < 12) {
      return console.log('Tempo insuficiente');
    } else if (tempo > 24 && tempo < 32) {
      return console.log('Queimou');
    } else if (tempo >= 32) {
      return console.log('KABUMM');
    } 
  }

  switch(receita){
    case 1:
      pipoca(tempo);
      break;

    case 2:
      macarrao(tempo);
      break;

    case 3:
      carne(tempo);
      break;

    case 4:
      feijao(tempo);
      break;

    case 5:
      brigadeiro(tempo);
      break;

    default:
      console.log('Prato inexistente');
      break;
  }

}

microondas(6, 20);

// testes

// microondas(1, 2);
// microondas(1, 15);
// microondas(1, 25);
// microondas(1, 35);
// microondas(2, 2);
// microondas(2, 15);
// microondas(2, 25);
// microondas(2, 35);
// microondas(3, 10);
// microondas(3, 25);
// microondas(3, 35);
// microondas(3, 47);
// microondas(4, 2);
// microondas(4, 15);
// microondas(4, 25);
// microondas(4, 35);
// microondas(5, 2);
// microondas(5, 15);
// microondas(5, 20);
// microondas(5, 35);