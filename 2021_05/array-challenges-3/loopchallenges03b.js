/**
 * Given the array

[9, 5, 7, 13, 19, 23, 4, 12, 15]


Find the factorials of each number.

*/

function factorialArr(arr) {
    var fact

    for (let i in arr) {
        fact = 1
        for (let j = 1; j <= arr[i]; j++) {
            fact *= j
        }
        console.log(`The factorial of ${arr[i]} is ${fact}`)
    }
}

var numbers = [9, 5, 7, 13, 19, 23, 4, 12, 15]

factorialArr(numbers)