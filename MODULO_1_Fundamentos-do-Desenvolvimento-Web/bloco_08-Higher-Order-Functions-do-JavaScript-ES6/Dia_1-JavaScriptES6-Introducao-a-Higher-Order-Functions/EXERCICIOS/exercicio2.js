// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const sorteio = (number, callback) => {
  const numeroSorteado = Math.round(Math.random() * 5);
    if (numeroSorteado === number) {
      console.log('Parabéns você ganhou!');
    } else {
      console.log('Tente novamente');
    };

  return callback();
};

const result = (number, numeroSorteado) => {
  number === numeroSorteado;
};

sorteio(1, result);