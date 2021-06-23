/**
 * freeCodeCamp - Chunky Monkey
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
*/

function chunkArrayInGroups(arr, size){
    let newArr = []

    while (arr.length > 0) {
        newArr.push(arr.splice(0, size))
    }
    
    return newArr
}

chunkArrayInGroups(["a", "b", "c", "d"], 2)