/**
 * freeCodeCamp - Basic Algorithm Scripting
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-algorithm-scripting
*/

console.log("--- Basic Algorithm Scripting ---")

// Convert Celsius to Fahrenheit
function convertToF(celsius){
    let fahrenheit = celsius * 9/5 + 32
    return fahrenheit
}
let tempC = 30
console.log(`\nConvert Celsius to Fahrenheit (${tempC}°C):`)
console.log(`${convertToF(tempC)}°F`)

// Reverse a String
function reverseString(str){
    return str.split("").reverse().join("")
}
let strToReverse = "hello"
console.log(`\nReverse a String (${strToReverse}):`)
console.log(reverseString(strToReverse))

// Factorialize a Number
function factorialize(num){
    let product = 1
    for(let i = 1; i <= num; i++){ // (let i = num - 1; i > 0; i--)
      product *= i
    }
    return product
}
let numToFactorial = 5
console.log(`\nFactorialize a Number (${numToFactorial}):`)
console.log(factorialize(numToFactorial))

// Find the Longest Word in a String
function findLongestWordLength(str){
    let lengthArr = str.split(" ").map(i => i.length)
    return Math.max(...lengthArr) // return Math.max(...str.split(" ").map(i => i.length))
}
let sentence = "The quick brown fox jumped over the lazy dog"
console.log(`\nFind the Longest Word in a String (${sentence}):`)
console.log(`${findLongestWordLength(sentence)} letters`)

// Return Largest Numbers in Arrays
function largestOfFour(arr){
    let arrLargest = []

    for(let i in arr){
        let largestNum = arr[i][0]

        for(let j in arr[i]){
            if(arr[i][j] > largestNum){
                largestNum = arr[i][j]
            }
        }

        arrLargest[i] = largestNum
        
        //arrLargest[i] = Math.max(...arr[i])
    }

    return arrLargest
}
let bigArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]
console.log(`\nReturn Largest Numbers in Arrays (`)
console.log(bigArr)
console.log(`):`)
console.log(largestOfFour(bigArr))

// Confirm the Ending
function confirmEnding(str, target){
    return str.slice(-target.length) === target
}
let word = "Bastian", end = "n"
console.log(`\nConfirm the Ending (${word}, ${end}):`)
console.log(confirmEnding(word, end))

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num){
    let newStr = ""
    
    for(let i = num; i > 0; i--){
      newStr += str
    }

    return newStr
}
let strToRepeat = "abc", repeat = 3
console.log(`\nRepeat a String Repeat a String (${strToRepeat}, ${repeat}):`)
console.log(repeatStringNumTimes(strToRepeat, repeat))

// Truncate a String
function truncateString(str, num) {
    return num < str.length ? str.slice(0, num) + "..." : str
}
let strToTruncate = "A-tisket a-tasket A green and yellow basket", truncIndex = 8
console.log(`\nTruncate a String (${strToTruncate}, ${truncIndex}):`)
console.log(truncateString(strToTruncate, truncIndex))

// Finders Keepers
function findElement(arr, func){
    /*let num = 0;
    for(let i in arr){
      num = arr[i];
      if (func(num)){
        return num;
      }
    }
    return undefined;*/

    return arr.find(func)
}
let arrFind = [1, 2, 3, 4], funcFind = num => num % 2 === 0
console.log(`\nFinders Keepers ([${arrFind}], ${funcFind}):`)
console.log(findElement(arrFind, funcFind))

// Boo who
function booWho(bool){
    return typeof bool === 'boolean'
}
let boolPrimitive = null
console.log(`\nBoo who (${boolPrimitive}):`)
console.log(booWho(boolPrimitive))

// Title Case a Sentence
function titleCase(str){
    var titleArray = str.toLowerCase().split(" ")

    titleArray = titleArray.map(
      word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    ).join(" ")
    
    return titleArray
}
let strToTitleCase = "I'm a little tea pot"
console.log(`\nTitle Case a Sentence (${strToTitleCase}):`)
console.log(titleCase(strToTitleCase))

// Slice and Splice
function frankenSplice(arr1, arr2, n){
    let newArr = arr2.slice()
    newArr.splice(n, 0, ...arr1)
    return newArr
}
let arr1 = [1, 2, 3], arr2 = [4, 5, 6], insert = 1
console.log(`\nSlice and Splice ([${arr1}], [${arr2}], ${insert}):`)
console.log(frankenSplice(arr1, arr2, insert))

// Falsy Bouncer
function bouncer(arr){
    let truthyArr = []
    for (let i in arr){
        if (arr[i]) truthyArr.push(arr[i])
    }
    return truthyArr;
    //return arr.filter(Boolean)
}
let falsyArr = [7, "ate", "", false, 9]
console.log(`\nFalsy Bouncer ([${falsyArr}]):`)
console.log(bouncer(falsyArr))

// Where do I Belong
function getIndexToIns(arr, num) {
    arr.push(num)
    return arr.sort((a, b) => a - b).indexOf(num)
    // return arr.concat(num).sort((a, b) => a - b).indexOf(num)
    // return arr.filter(i => num > i).length
}
let arr = [40, 60], insertNum = 50
console.log(`\nWhere do I Belong ([${arr}], ${insertNum}):`)
console.log(getIndexToIns(arr, insertNum))

// Mutations
function mutation(arr){
    let str1 = arr[0].toLowerCase(), str2 = arr[1].toLowerCase()
    return str2.split("").every(i => str1.indexOf(i) != -1)
}
let arrMutate = ["hello", "hey"]
console.log(`\nMutations ([${arrMutate}]):`)
console.log(mutation(arrMutate))

// Chonky Monkey
function chunkArrayInGroups(arr, size){
    let newArr = []

    while (arr.length > 0) {
        newArr.push(arr.splice(0, size))
    }

    return newArr
}
let arrToGroup = ["a", "b", "c", "d"], groupSize = 2
console.log(`\nChonky Monkey ([${arrToGroup}], ${groupSize}):`)
console.log(chunkArrayInGroups(arrToGroup, groupSize))