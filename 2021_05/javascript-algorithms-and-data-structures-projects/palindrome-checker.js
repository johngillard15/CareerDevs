/**
 * freeCodeCamp - Palindrome Checker
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
 */

function palindrome(str) {
    let strClean = str.replace(/[\W_]/g, "").toLowerCase();
    let strReverse = strClean.split("").reverse().join("");
    return strClean == strReverse;
}

palindrome("eye");