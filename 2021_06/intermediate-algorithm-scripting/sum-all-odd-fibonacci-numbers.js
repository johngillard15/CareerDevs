/**
 * freeCodeCamp - Sum All Odd Fibonacci Numbers
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
*/

function sumFibs(num){
    let fiboLast = 0
    let fiboCurrent = 1
    let sum = 0

    while(fiboCurrent <= num){
        if(fiboCurrent % 2 !== 0)
            sum += fiboCurrent
        fiboCurrent += fiboLast
        fiboLast = fiboCurrent - fiboLast
    }
    
    return sum
}

console.log(sumFibs(4))