/**
 * freeCodeCamp - Mutations
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
*/

function mutation(arr){
    let str1 = arr[0].toLowerCase(), str2 = arr[1].toLowerCase()
    return str2.split("").every(i => str1.indexOf(i) != -1)
}

mutation(["hello", "hey"])