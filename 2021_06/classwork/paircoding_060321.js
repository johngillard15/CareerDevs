/** paircoding_060321.js
 * John Gillard (a) & Mike (b)
 * 
 For each challenge (with the exception of challenge 4) there are two parts. Each partner will play a role while completing each part. There will be a driver and a passenger. The driver should share their screen and take the lead of solving the challenge. The passenger should follow along and can make suggestions / ask leading questions but can not give exact directions on what to type. When part a is completed by the first driver, the roles will reverse. And this should continue until challenges 1-3 are completed. For challenge 4 partners should discuss a solution before coding and either partner can share their screen.

*/

// Challenge 1
// a
/* var odometer = 543543543

function insurance(miles){
    if(miles < 100000){
        return "Your car has been driven less than 100,000 miles, you are available for the better insurance package"
    }
    return "Your car has been driven more than or equal to 100,000 miles, you are not available for the better insurance package"
}

console.log(insurance(odometer)) */

// b
/*  var cost = 600

  function hotelType(price) {
      if(price > 500) {
          return "You have selected a luxury hotel suite"
      }
      return "You have selected a standard hotel suite"
  }

  console.log(hotelType(cost)) */

// Challenge 2
// a
/*  let carNames = ['Honda Accord', 'Toyota Corolla', 'Tesla Model Y', 'Chevy Camaro']

 console.log(carNames.join("\n")) */

// b
/*  let hotelName = "CareerDevs Resorts"

 for (var i = 0; i < hotelName.length; i++) {
     console.log(hotelName[i])
 } */

// Challenge 3
// a
/* let carGas = [.15, .75, .27, .23, .80, .50, .10, 30]

function fillUp(gasLevel) {
    for (let i in gasLevel) {
        if (gasLevel[i] < .25) {
            console.log(`The car’s gas tank is at ${gasLevel[i] * 100}%, the car needs a fill up soon.`)
        }
        else {
            console.log(`The car’s gas tank is at ${gasLevel[i] * 100}%, the car does not need a fill up very soon.`)
        }
    }
}

fillUp(carGas) */

// b
/* let hotelPrices = [550, 300, 100, 700, 250, 450, 600, 200]

function isLuxury(price) {
    for (let i in price) {
        if (price[i] < 500) {
            console.log(`The hotel room with the price $${price[i]} is not a luxury room.`)
        }
        else {
            console.log(`The hotel room with the price $${price[i]} is a luxury room.`)
        }
    }
}

isLuxury(hotelPrices) */

// Challenge 4
// initial version
let numbers = []

for(let i = 14; i <= 100; i++){
    numbers.push(i)
}

for(let i in numbers){
    let product = numbers[i] * 3

    if(product % 2 == 0){
        console.log(`${product} is even`)
    }
    else{
        console.log(`${product} is odd`)
    }
}

// second version
// let numbers = []

// for (let i = 14; i < 101; i++) {
//     numbers.push(i)
// }
// let tempNum = []
// for (let i in numbers) {
//     tempNum.push(numbers[i] * 3)

//     if (tempNum[i] % 2 == 0) {
//         console.log(`${tempNum[i]} is even`)
//     }
//     else {
//         console.log(`${tempNum[i]} is odd`)
//     }
// }
