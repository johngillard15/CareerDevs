/**
 * freeCodeCamp - Wherefore art thou
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou
 */

function whatIsInAName(collection, source){
    var arr = [];
    // Only change code below this line

    for(let i in collection){
        if(collection[i].keys().indexOf(source.keys())){
            
        }
    }

    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });