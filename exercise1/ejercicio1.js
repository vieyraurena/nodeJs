// Desarrollo un programaque permita leer un número entero positivo,n, 
// y muestre en pantalla la suma de todos los enteros desde 1 hastan. 
// La suma de los primeros enteros positivos puede ser calculada de la siguiente forma: suma=n(n+1)/2

console.log('process.argv', process.argv)

let myArgv = process.argv.slice(2)
console.log('MyArgv', myArgv)

let number1 = Number(myArgv[0]);

function operation(n) {
  let suma = 1;
  for (let index = 1; index <= n; index++) {
    suma = n * (n + 1) / 2;
    return suma
  }
}

console.log(operation(number1));