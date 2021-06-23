/**
 * freeCodeCamp - Confirm the Ending
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending
*/

function confirmEnding(str, target){
  return str.slice(-target.length) === target
}

confirmEnding("Bastian", "n")