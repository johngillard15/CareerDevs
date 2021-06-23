/**
 * freeCodeCamp - Sum All Primes
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
*/

function sumPrimes(num){
    let primes = []
    let sum = 0

    for(let number = 2; number <= num; number++){
        let isPrime = true

        for(let i = 2; i < number; i++){
            if(number % i == 0)
                isPrime = false
        }

        if(isPrime)
            primes.push(number)
    }
    //console.log(primes)

    for (let i in primes) {
        sum += primes[i]
    }

    return sum
}

console.log(sumPrimes(977))