/**
 * freeCodeCamp - Caesars Cipher
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
 */

function rot13(str) {
    return str.replace(/[A-Z]/g, i => String.fromCharCode((i.charCodeAt(0) % 26) + 65));
}

rot13("SERR PBQR PNZC");