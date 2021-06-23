/**
 *
Complete the following Challenges and complete them in one file called 

arraychallenges060121.js

Separate each challenge using coding comments 

Ask for help on any challenges that may get you stuck.

1)https://edabit.com/challenge/QaApgtePE6QrCZ64o
2)https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
3)https://edabit.com/challenge/kJQYTCCWSnzhXG9dn
4)https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
*/

// Challenge 1 - Return the First Element in an Array
function getFirst(arr){
    return arr[0]
}

// Challenge 2 - Return the Last Element in an Array
function getLast(arr){
    return arr[arr.length - 1]
}

// Challenge 3 - Reverse an Array
function reverseArr(arr) {
    var tempArr = []

    for(let i = 0, j = arr.length - 1; i < arr.length; i++, j--){
        tempArr[i] = arr[j]
    }
    /* for(let i in arr)
        tempArr[i] = arr[(arr.length - 1) - i] */
    
    return tempArr
    //return arr.reverse()
}

// Challenge 4 - Return Largest Numbers in Arrays
function largestOfFour(arr) {
    var arrLargest = []
    var largestNum

    for(let i in arr){
        largestNum = 0

        for(let j in arr[i]){
            if(arr[i][j] > largestNum){
                largestNum = arr[i][j]
            }
        }

        arrLargest[i] = largestNum
    }

    return arrLargest
}


var testArr = [1, 3, 5, 7, 11]
var largeArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]

console.log(`\nTesting array: ${testArr}\n-----`)
console.log(`Return the Last Element in an Array: ${getFirst(testArr)}`)
console.log(`Return the Last Element in an Array: ${getLast(testArr)}`)
console.log(`Reverse an Array: ${reverseArr(testArr)}`)

console.log(`\nTesting array:`)
console.log(largeArr)
console.log(`-----`)
console.log(`Return Largest Numbers in Arrays: ${largestOfFour(largeArr)}`)