/**
 * freeCodeCamp - Missing Letters
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters
*/

function fearNotLetter(str){
    let missingChar = undefined

    for(let i = 0; i < str.length; i++){
        let currentCharCode = str.charCodeAt(i), expectedCharCode = str.charCodeAt(0) + i
        
        if(currentCharCode != expectedCharCode)
            missingChar = String.fromCharCode(currentCharCode - 1)
    }

    return missingChar

    /* for(let i = 0; i < str.length; i++){
        let currentCharCode = str.charCodeAt(i), expectedCharCode = str.charCodeAt(0) + i

        if(currentCharCode !== expectedCharCode)
          return String.fromCharCode(currentCharCode - 1)
    }

    return undefined */
}

console.log(fearNotLetter("abcde"))