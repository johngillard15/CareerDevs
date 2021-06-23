/**
 * freeCodeCamp - Spinal Tap Case
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
*/

function spinalCase(str){
    return str.replace(/\s/g, "-").toLowerCase()
}

console.log(spinalCase('This Is Spinal Tap'))