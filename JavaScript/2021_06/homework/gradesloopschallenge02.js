/**
 * 
*/

// Challenge 1
var ourQuizGrades = [
    ['Bob', 72], ['Jill', 89],
    ['Billy', 95], ['Grace', 90],
    ['Jen', 77], ['Tom', 80],
    ['Jack', 49], ['Alex', 56],
    ['Michelle', 71], ['Bill', 12],
    ['Neil', 72], ['Sam', 88],
    ['Henry', 43], ['Dave', 69]
]

function passedAndFailed(arr){
    let passed = 0, failed = 0
    for(let i in arr){
        if(arr[i][1] >= 70)
            passed++
        else
            failed++
    }
    console.log(`${passed} students passed the quiz, and ${failed} students failed...`)
}

passedAndFailed(ourQuizGrades)

// Challenge 2
function studentGrades(arr){
    for(let i in arr){
        if(arr[i][1] >= 70)
            console.log(`${arr[i][0]} passed with a ${arr[i][1]}`)
        else
            console.log(`${arr[i][0]} failed with a ${arr[i][1]}`)
    }
}

//studentGrades(ourQuizGrades)

// Challenge 3
function passingGrades(arr){
    arr = arr.filter(grade => grade[1] >= 70).sort((a, b) => a[1] - b[1])
    studentGrades(arr)
}

passingGrades(ourQuizGrades)