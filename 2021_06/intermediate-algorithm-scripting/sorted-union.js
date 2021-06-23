/**
 * freeCodeCamp - Sorted Union
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
*/

function uniteUnique(arr){
    let newArr = []
    for(let i in arguments){
        for(let j in arguments[i]){
            if(newArr.indexOf(arguments[i][j]) == -1){
                newArr.push(arguments[i][j])
            }
        }
    }
    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])