/**
 * freeCodeCamp - Finders Keepers
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
*/

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

findElement([1, 2, 3, 4], num => num % 2 === 0)