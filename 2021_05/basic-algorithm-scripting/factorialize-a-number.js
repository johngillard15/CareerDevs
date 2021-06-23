/**
 * freeCodeCamp - Factorialize a Number
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number
 */

function factorialize(num){
  let product = 1
  for(let i = 1; i <= num; i++){ // (let i = num - 1; i > 0; i--)
    product *= i
  }
  return product
}

factorialize(5)