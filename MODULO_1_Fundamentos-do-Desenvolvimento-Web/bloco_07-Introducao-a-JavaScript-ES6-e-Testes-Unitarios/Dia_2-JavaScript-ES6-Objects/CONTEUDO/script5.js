// Parte 5- object.assign

// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// exemplo 1
const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

// perceba que age aparece em person e info, mas o output apresenta apenas info, pois  a propriedade do objeto destino sempre utilizará o último valor disponível

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

// exemplo 2
const person = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// exemplo 3
clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

//exemplo 4 
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

// exemplo 5
const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);

// form de exercicios
const band = {
  name: 'Blind Guardian',
  formedIn: 1986,
  lastAlbum: 'Beyond the Red Mirror',
};

const info = {
  genre: 'Power Metal',
  lastAlbum: 'Twilight Orchestra: Legacy of the Dark Lands',
};
console.log(Object.assign(band, info));
