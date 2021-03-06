// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto "Olá Nome".
export function greeter(name: string) {
  return `Olá ${name}!`;
}

// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array.
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// A quarta função que vamos desenvolver será para calcular a área do triângulo.
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// A quinta função que vamos desenvolver será para calcular a área do quadrado.
export function square(side: number): number {
  return side ** 2;
}

// E a última função que vamos desenvolver será para calcular a área do retângulo.
export function rectangle(base: number, height: number): number {
  return base * height;
}

// exercises part 2:

// Crie uma nova função para calcular a área do losango
export function losango(diagonalMaior: number, diagonalMenor: number): number {
  return (diagonalMaior * diagonalMenor) / 2;
}

// Crie uma nova função para calcular a área do trapézio
export function trapezio(altura: number, baseMaior: number, baseMenor: number): number {
  return ((baseMaior + baseMenor) * altura) / 2;
}

// Crie uma nova função para calcular a área do círculo
export function circulo(PI: number, raio: number): number {
  return PI * (raio ** 2);
}