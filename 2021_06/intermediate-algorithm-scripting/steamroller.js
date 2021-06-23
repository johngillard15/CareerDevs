/**
 * freeCodeCamp - Steamroller
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
*/

function steamrollArray(arr){
    let flatArr = []

    for(let i in arr){
        let currentIndex = arr[i]
        if(Array.isArray(currentIndex))
            flatArr.push(...steamrollArray(currentIndex))
        else
            flatArr.push(currentIndex)
    }

    return flatArr
}

steamrollArray([1, [2], [3, [[4]]]])