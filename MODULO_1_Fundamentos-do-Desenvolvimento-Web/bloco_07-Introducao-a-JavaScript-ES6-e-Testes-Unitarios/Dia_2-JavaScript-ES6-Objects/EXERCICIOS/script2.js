// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
// Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

lesson2.turno = 'manhã';
console.log(lesson2);

/* const addWorkShift = (obj, key, value) => {
  obj[key] = value;
};

console.log(addWorkShift(lesson2, 'turno', 'manhã')); */

// Exercício 2
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = obj =>  Object.keys(obj);
console.log(listKeys(lesson1));

// Exercício 3
// Crie uma função para mostrar o tamanho de um objeto.
const objSize = obj => Object.keys(obj).length;
console.log(objSize(lesson1));

// Exercício 4
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = obj => Object.values(obj);
console.log(objValues(lesson1));

