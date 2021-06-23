/**
 * freeCodeCamp - Where do I Belong
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
*/

function getIndexToIns(arr, num) {
    arr.push(num)
    return arr.sort((a, b) => a - b).indexOf(num)
    // return arr.concat(num).sort((a, b) => a - b).indexOf(num)
    // return arr.filter(i => num > i).length
}

getIndexToIns([40, 60], 50)