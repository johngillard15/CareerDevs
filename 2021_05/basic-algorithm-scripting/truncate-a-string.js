/**
 * freeCodeCamp - Truncate a String
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
*/

function truncateString(str, num) {
    return num < str.length ? str.slice(0, num) + "..." : str
}

truncateString("A-tisket a-tasket A green and yellow basket", 8)