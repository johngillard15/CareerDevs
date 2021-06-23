/**
 * HW 2021-05-27
 * 
Complete the following challenges all in one file titled 
arraychallenges01.js

Separate each challenge by a comment with each challenge numbered appropriately.

When starting each challenge, read the instructions thoroughly, copy the starter code into VSCode (or your online editor if on a Chromebook) and first attempt to solve the challenge without looking anything up online. If you are stuck. Reach out to your cohort members for help.

https://edabit.com/challenge/QaApgtePE6QrCZ64o
https://edabit.com/challenge/7JBTN4TbaxJQMdX9W
https://edabit.com/challenge/ZZ82YaHmPZRewQNYH
https://edabit.com/challenge/9mKB2XJJ9gYgjms4Z
https://edabit.com/challenge/kJQYTCCWSnzhXG9dn

NOTE: for number 5 there exists a .reverse method for arrays. Do not use this method for your solution. It must be completed without using that method.


When complete with all the challenges make sure they are all in one file and neatly organized. Then submit to the GoogleClassroom assignment
*/

// Challenge 1 - Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.
function getFirst(arr){
    return arr[0]
}

// Challenge 2 - Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.
function getLast(arr){
    return arr[arr.length - 1]
}

// Challenge 3 - Array Indexing
// Given an index and an array, return the value of the array with the given index.
function getIndex(arr, index){
    return arr[index]
}

// Challenge 4 - Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).
function evenOrOdd(arr){
    let sum = 0

    if(arr.length == 0)
        return "even"

    for(let i in arr)
        sum += arr[i]

    return sum % 2 == 0 ? "even" : "odd"
}

// Challenge 5 - Reverse an Array
// Write a function to reverse an array.
function reverseArray(arr){
    let newArr = []

    for(let i = arr.length - 1; i >= 0; i--)
        newArr.push(arr[i])

    return newArr
}

var testArr = [1, 2, 3, 5, 7, 11]
var testIndex = 3
console.log("\nTesting array: ")
console.log(testArr)
console.log("\nReturn the First Element in an Array: ")
console.log(getFirst(testArr))
console.log("Return the Last Element in an Array: ")
console.log(getLast(testArr))
console.log(`Array Indexing: [${testIndex}]`)
console.log(getIndex(testArr, testIndex))
console.log("Even or Odd?: ")
console.log(evenOrOdd(testArr))
console.log("Reverse an Array: ")
console.log(reverseArray(testArr))