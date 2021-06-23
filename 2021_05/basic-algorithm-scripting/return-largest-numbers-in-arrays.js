/**
 * freeCodeCamp - Return Largest Numbers in Arrays
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays
*/

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

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])