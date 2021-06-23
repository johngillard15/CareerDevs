/**
 * freeCodeCamp - Falsy Bouncer
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
*/

function bouncer(arr){
    let truthyArr = []
    for (let i in arr){
        if (arr[i]) truthyArr.push(arr[i])
    }
    return truthyArr;
    //return arr.filter(Boolean)
}

bouncer([7, "ate", "", false, 9])