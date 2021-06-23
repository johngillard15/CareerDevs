/**
 * Your goal on this challenge is to calculate and output the factorial of 7 using a loop
*/

function factorial(num){
    var fact = 1

    for(let i = 1; i <= num; i++){
        fact *= i
    }

    return fact
}

var x = 7

console.log(`${x}! = ${factorial(x)}`)