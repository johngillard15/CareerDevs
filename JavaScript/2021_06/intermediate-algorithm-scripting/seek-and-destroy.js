/**
 * freeCodeCamp - Seek and Destroy
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy
 */

 function destroyer(arr/* , ...toDestroy */){
    for(let i = 1; i < arguments.length; i++){
        let toDestroy = arr.indexOf(arguments[i])
        while(toDestroy != -1){
            arr.splice(toDestroy, 1)
            toDestroy = arr.indexOf(arguments[i])
        }
    }

    return arr
    /* return arr.filter(i => !toDestroy.includes(i)) */
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);