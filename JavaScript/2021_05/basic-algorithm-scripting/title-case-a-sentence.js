/**
 * freeCodeCamp - Title Case a Sentence
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
*/

function titleCase(str){
  var titleArray = str.toLowerCase().split(" ")
  
  titleArray = titleArray.map(
    word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())
  ).join(" ")

  return titleArray
}

titleCase("I'm a little tea pot")