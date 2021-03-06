// EXERCÍCIOS

// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

// getPlanet(); // imprime Marte depois de 4 segundos

setTimeout(getPlanet, 4000);

// outra opção seria jogar o setTimeout dentro da função, substituindo a linha 13 por:
// setTimeout(() => console.log("Returned planet: ", mars), 4000);