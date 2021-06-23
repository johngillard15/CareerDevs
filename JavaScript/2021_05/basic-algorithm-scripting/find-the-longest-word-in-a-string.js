/**
 * freeCodeCamp - Find the Longest Word in a String
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string
*/

function findLongestWordLength(str){
  let lengthArr = str.split(" ").map(i => i.length)
  return Math.max(...lengthArr) // return Math.max(...str.split(" ").map(i => i.length))
}

findLongestWordLength("The quick brown fox jumped over the lazy dog")