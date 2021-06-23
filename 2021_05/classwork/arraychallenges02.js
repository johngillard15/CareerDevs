/**
 *
Complete the following challenges all in one file titled 
arraychallenges02.js

Separate each challenge by a comment with each challenge numbered appropriately.

When starting each challenge, read the instructions thoroughly, copy the starter code into VSCode (or your online editor if on a Chromebook) and first attempt to solve the challenge without looking anything up online. If you are stuck. Reach out to your cohort members for help.



YES SOME OF THESE ARE REPEATS FROM CLASS
	
    1) https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
    2) https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw
    3) https://edabit.com/challenge/QaApgtePE6QrCZ64o
    4) Same as the previous challenge. Now create a function that returns the 3rd element in an array. If there is not one, return “Nothing found”
    5) https://edabit.com/challenge/ZZ82YaHmPZRewQNYH
    6) https://edabit.com/challenge/BLJ5SyhMoZD892G7w
 */

// Challenge 1 - Return the Sum of Two Numbers
// Create a function that takes two numbers as arguments and return their sum.
function sum(a, b){
    return a + b
}

// Challenge 2 - Convert Age to Days
// Create a function that takes the age in years and returns the age in days.
function yearsToDays(age){
    return age * 365
}

// Challenge 3 - Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.
function getFirst(arr){
    return arr[0]
}

// Challenge 4 - Return the Third Element in an Array
// Same as the previous challenge. Now create a function that returns the 3rd element in an array. If there is not one, return “Nothing found”
function getThird(arr){
    return arr.length >= 3 ? arr[2] : "Nothing found"
}

// Challenge 5 - Array Indexing
// Given an index and an array, return the value of the array with the given index.
function getIndex(arr, index){
    return arr[Math.floor(index)]
}

// Challenge 6 - Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.
function arrToStr(arr){
    /*var str
    for(let i = 0; i < arr.length; i++){
        str += arr[i]
    }
    return str*/
    return arr.join("")
}

var x = 6, y = 23
var ageYears = 20
var testArr = [1, 2, 3, 5, 7, 11]
var testIndex = 3

console.log("\nTesting array: ")
console.log(testArr)
console.log(`\nReturn the Sum of Two Numbers: `)
console.log(sum(x, y))
console.log("Convert Age to Days: ")
console.log(yearsToDays(ageYears))
console.log("Return the First Element in an Array: ")
console.log(getFirst(testArr))
console.log("Return the Third Element in an Array: ")
console.log(getThird(testArr))
console.log(`Array Indexing: [${testIndex}]`)
console.log(getIndex(testArr, testIndex))
console.log("Convert an Array to a String: ")
console.log(arrToStr(testArr))