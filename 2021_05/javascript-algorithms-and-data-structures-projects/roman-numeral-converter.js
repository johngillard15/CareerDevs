/**
 * freeCodeCamp - Roman Numeral Converter
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter
 */

function convertToRoman(num) {
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let numeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let roman = "";

    for (let i in decimal) {
        while (decimal[i] <= num) {
            roman += numeral[i];
            num -= decimal[i];
        }
    }

    return roman;
}

convertToRoman(36);