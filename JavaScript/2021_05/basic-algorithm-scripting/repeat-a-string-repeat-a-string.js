/**
 * freeCodeCamp - Repeat a String Repeat a String
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string
*/

function repeatStringNumTimes(str, num){
  let newStr = ""
  for(let i = num; i > 0; i--){
    newStr += str
  }
  return newStr
}

repeatStringNumTimes("abc", 3)