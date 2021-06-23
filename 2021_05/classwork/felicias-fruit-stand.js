/**
 * Felicia's Fruit Stand
 * 
    Use nested arrays
    1. Array that stores three types of fruit; apples, oranges and grapes
    2. Each fruit type should have three different types
    3. Every fruit should have a unique price (please use normal prices)
    4. There should be an array called salesQuantity that stores the total number of sales for each fruit
    5. finally you should output a sales total summary for each fruit type.
 */

var fruitNames = ["Apples", "Oranges", "Grapes"]
var fruitTypes = [
    ["Arkansas Black", "Pink Pearl", "Ambrosia"],
    ["Blood", "Valencia", "Jaffa"],
    ["Moon Drops", "Concord", "Pinot Noir"]
]
var price = [[.59, .65, .70], [.65, .56, .57], [.33, .44, .40]]
var salesQuantity = [[30, 45, 50], [20, 45, 32], [22, 56, 47]]
var precision2 = x => x.toFixed(2);

for(let i in fruitTypes){
    console.log(`\n - ${fruitNames[i]} - `)
    for(let j in fruitTypes[i]){
        console.log(`${fruitTypes[i][j]} -> (${salesQuantity[i][j]} ${fruitNames[i]} * $${price[i][j].toFixed(2)}) = $${precision2(salesQuantity[i][j] * price[i][j])}`)
    }
}

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
        console.log(`${fruitStand[i].type[j]} -> (${salesQuantity[i][j]} ${fruitStand[i].fruit} * $${fruitStand[i].price[j].toFixed(2)}) = $${precision2(salesQuantity[i][j] * fruitStand[i].price[j])}`)
    }
}*/