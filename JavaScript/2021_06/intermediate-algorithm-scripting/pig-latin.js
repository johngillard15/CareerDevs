/**
 * freeCodeCamp - Pig Latin
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin
*/

function translatePigLatin(str) {
    /* let pigLatin = ""
    let vowelRegex = /[aeiou]/gi // vowels

    if(str[0].match(vowelRegex))
        pigLatin = str + "way"
    else if(str.match(vowelRegex) === null)
        pigLatin = str + "ay"
    else{
        let vowelIndex = str.indexOf(str.match(vowelRegex)[0]);
        pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay"
    }

    return pigLatin */

    let consonantRegex = /^[^aeiou]+/
    let consonantMatch = str.match(consonantRegex)
    return consonantMatch !== null
        ? str.replace(consonantRegex, "").concat(consonantMatch).concat("ay")
        : str.concat("way")
}

console.log(translatePigLatin("consonant"))