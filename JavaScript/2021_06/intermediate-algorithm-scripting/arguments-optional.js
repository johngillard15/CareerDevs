/**
 * freeCodeCamp - Arguments Optional
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
*/

function addTogether(){
    const arg1 = arguments[0], arg2 = arguments[1]

    if(typeof arg1 !== "number")
        return undefined

    const add = (arg2) => typeof arg2 === 'number'
        ? arg1 + arg2
        : undefined

    return arg2 === undefined
        ? add
        : add(arg2)
}
let num1 = 5, num2 = 7
console.log(addTogether(num1)(num2))