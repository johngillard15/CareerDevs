/**
 * freeCodeCamp - Sum All Numbers in a Range
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
*/

function sumAll(arr){
    var a = Math.min(...arr), b = Math.max(...arr), sum = 0

    for(let i = a; i <= b; i++)
        sum += i

    return sum;
}

sumAll([1, 4]);