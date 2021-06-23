/**
 * Copy the array from the last program and add the value 0 to your array. 
Now you must account for the special case 0 where the factorial of 0 is equal to 1. 

Now you will need to find the factorial of each number, and then find the remainder of each factorial when divided by 10. 


Your program needs to output the number which produced the largest remainder from its factorial, the factorial, and the remainder when dividing by ten.
*/

function factorialArr(arr){
    var factArr = []
    var remainder
    var largestRemainder = 0
    var largestPos

    for(let i in arr){
        factArr[i] = 1
        for(let j = 1; j <= arr[i]; j++){
            factArr[i] *= j
        }
        remainder = factArr[i] % 10
        if(remainder > largestRemainder){
            largestPos = i
            largestRemainder = remainder
            // show new biggest remainder:
            // console.log(`New biggest remainder: ${arr[i]}`)
        }
        // show all values:
        // console.log(`Current number: ${arr[i]}, ${arr[i]}! = ${factArr[i]}, ${factArr[i]} % 10 = ${remainder}`)
    }

    console.log(`\nInitial number: ${arr[largestPos]}, Factorial of Initial number: ${factArr[largestPos]}, Remainder of factorial: ${largestRemainder}`)
}

var numbers = [9, 5, 7, 13, 19, 23, 4, 12, 15, 0]

factorialArr(numbers)