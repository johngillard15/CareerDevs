/**
 * Felicia's Fruit Stand 2.0
 * 
    After completion of Felicia's Fruit Stand complete the following tasks...
    Create a new file and only copy the array data from the previous assignment

    Output the total number of fruits sold

    Output the total profit of all fruits.


    Output all the fruit types for a each fruit type.

    example output:



    Apples:

    Granny Smith
    Red Delicious

    Honeycrisp




    Modify
    salesQuantity array to contain a number sold for each fruit by type.



    create an array called fruitStock that contains how much total stock there is of each fruit type. Should be a two dimensional array. It needs to be hire that the number sold


    Output how many fruits are left in stock for each fruit type.



    Output the total missed profit for each fruit.
 */

var fruitNames = ["Apples", "Oranges", "Grapes"]
var fruitTypes = [
    ["Arkansas Black", "Pink Pearl", "Ambrosia"],
    ["Blood", "Valencia", "Jaffa"],
    ["Moon Drops", "Concord", "Pinot Noir"]
]
var price = [[.59, .65, .70], [.65, .56, .57], [.33, .44, .40]]
var fruitStock = [[40, 50, 50], [50, 50, 40], [50, 70, 60]]
var salesQuantity = [[30, 45, 50], [20, 45, 32], [22, 56, 47]]
var precision2 = x => x.toFixed(2)

var totalProfits = 0
for(let i in fruitTypes){
    console.log(`\n - ${fruitNames[i]} - `)
    let fruitProfit = 0
    for(let j in fruitTypes[i]){
        console.log(`${fruitTypes[i][j]} sold -> ${salesQuantity[i][j]}`)
        console.log(`\tStock left -> ${fruitStock[i][j] - salesQuantity[i][j]}`)
        console.log(`\tMissed Profit -> $${precision2( (fruitStock[i][j] - salesQuantity[i][j]) * price[i][j] )}`)
        fruitProfit += (fruitStock[i][j] - salesQuantity[i][j]) * price[i][j]
    }
    console.log(`Total ${fruitNames[i]} Profit: $${fruitProfit.toFixed(2)}`)
    totalProfits += fruitProfit
}
console.log(`---\nTotal Profits: $${totalProfits.toFixed(2)}`)


/*var fruitStand = [
    {
        "fruit": "Apples",
        "type": ["Arkansas Black", "Pink Pearl", "Ambrosia"],
        "price": [.59, .65, .70]
    },
    {
        "fruit": "Oranges",
        "type": ["Blood", "Valencia", "Jaffa"],
        "price": [.65, .56, .57]
    },
    {
        "fruit": "Grapes",
        "type": ["Moon Drops", "Concord", "Pinot Noir"],
        "price": [.33, .44, .40]
    },
]

for(let i in fruitStand){
    console.log(`\n - ${fruitStand[i].fruit} - `)
    for(let j in fruitStand[i].type){
        console.log(`${fruitStand[i].type[j]} sold -> ${fruitStock[i][j] - salesQuantity[i][j]}`)
        console.log(`\tStock left -> ${fruitStock[i][j] - salesQuantity[i][j]}`)
        console.log(`\tMissed Profit -> $${precision2( (fruitStock[i][j] - salesQuantity[i][j]) * fruitStand[i].price[j] )}`)
    }
}*/
