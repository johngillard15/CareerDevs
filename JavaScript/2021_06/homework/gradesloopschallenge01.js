/**
 * Create file with the name: gradesloopschallenge01.js
*/

// Challenge 1
var ourQuizGrades = [72, 89, 95, 90, 77, 80, 49, 56, 71, 12, 72, 88, 43, 69]

function passedAndFailed(grades){
    let passed = 0, failed = 0

    for(let i in grades){
        if(grades[i] >= 70)
            passed++
        else
            failed++
    }
    
    console.log(`${passed} students passed the quiz, and ${failed} students failed...`)
}

passedAndFailed(ourQuizGrades)


// Challenge 2
var ourQuizGradesNames = ['Bob', 'Jill', 'Billy', 'Grace', 'Jen', 'Tom', 'Jack', 'Alex', 'Michelle', 'Bill', 'Neil', 'Sam', 'Henry', 'Dave']

function studentGrades(students, grades){
    for(let i in students){
        if(grades[i] >= 70)
            console.log(`${students[i]} passed with a ${grades[i]}`)
        else
            console.log(`${students[i]} failed with a ${grades[i]}`)
    }
}

//studentGrades(ourQuizGradesNames, ourQuizGrades)


// Challenge 3
function passingGrades(students, grades, print = true){
    /* var newStudents = []
    var tempGrades = []
    
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 70){
            grades.splice(i, 1)
            students.splice(i, 1)
            i--
        }
    }

    tempGrades = [...grades]

    for(let i in students){
        let lowest = Math.min(...tempGrades)
        let pos = tempGrades.indexOf(lowest)
        newStudents.push(students[pos])
        tempGrades[pos] = 999
    } 
    
    grades.sort()

    if(print){
        studentGrades(newStudents, grades)
    }

    return [newStudents, grades] */

    var tempArr = []

    for(let i in grades){
        tempArr[i] = [grades[i], students[i]]
    }
    
    tempArr = tempArr.filter(grade => grade[0] >= 70)
    
    tempArr.sort((a, b) => a[0] - b[0])

    students = [], grades = []
    for(let i in tempArr){
        grades[i] = tempArr[i][0]
        students[i] = tempArr[i][1]
    }


    if(print){
        studentGrades(students, grades)
    }

    return [students, grades]
}

//passingGrades(ourQuizGradesNames, ourQuizGrades)


// Challenge 4
function letterGrades(students, grades){
    [students, grades] = passingGrades(students, grades, false)
    var letter = []

    for(let i in students){
        if(grades[i] >= 95)
            letter[i] = 'A+'
        else if(grades[i] >= 90)
            letter[i] = 'A-'
        else if(grades[i] >= 85)
            letter[i] = 'B+'
        else if(grades[i] >= 80)
            letter[i] = 'B-'
        else if(grades[i] >= 75)
            letter[i] = 'C+'
        else if(grades[i] >= 70)
            letter[i] = 'C-'
        else if(grades[i] >= 65)
            letter[i] = 'D+'
        else if(grades[i] >= 60)
            letter[i] = 'D-'
        else
            letter[i] = 'F'
    }

    for(let i in students)
        console.log(`${students[i]} got a ${letter[i]} on their quiz.`)
}

letterGrades(ourQuizGradesNames, ourQuizGrades)