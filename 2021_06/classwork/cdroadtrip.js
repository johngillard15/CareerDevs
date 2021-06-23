/**
 * Create a file called cdroadtrip.js to create and store your solution.
*/

// Challenge 1
console.log(`Challenge 1:`)

let riders = [["Arnell"], ["Carlos", "Keith", "Sergio"], ["Junior", "Loubna", "Margie"], ["Travis", "Matt", "Gabriel"], ["Elvis", "Jackie", "Saimer"]]

console.log(`${riders[3][2]}\n${riders[0][0]}\n${riders[2][2]}`)


// Challenge 2
console.log(`\nChallenge 2:`)

for(let i = 0; i < riders.length; i++){
    for(let j in riders[i]){
        console.log(`${riders[i][j]} is sitting in row ${i + 1}`)
    }
}


// Bonus
console.log(`\nBonus:`)

for(let i in riders){
    for(let j in riders[i]){
        if(riders[i][j].length < 6){
            for(let char in riders[i][j]){
                console.log(`${riders[i][j][char]}`)
            }
        }
    }
}