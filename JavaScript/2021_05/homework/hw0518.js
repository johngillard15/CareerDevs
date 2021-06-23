/** 
Home Work assignments:


Homework #1
1. Your program should count and output the count number before each students first and last name
Example: 
1. Arnell Milhouse  
2. Joel Fernandez

Homework #2
Count the total number of students, however, only output the total number after outputting all of the students names.
Example:
Arnell Milhouse
Lujein Suliman
Total Students: 2

Homework #3
Have console log output the following:
Example:
Forest Gump, contains 10 letters
Arnell Milhouse, contains 14 letters
*/



var firstName = ["Arnell", "Mike", "John", "Jeff", "Taylor", "Riches", "Joel", "Freddy", "Elvis", "Brett", "Lujein", "Gabriel", "Simon", "Manny", "Pierre"]
var lastName = ["Milhouse", "Ferrara", "Gillard", "Mitsou", "Blais", "Loung", "Fernandez", "Canido", "Aibangbee", "Marcotte", "Suliman", "Sherman", "Morris", "Lee", "Edouard Fils"]

/*// #1 
for (let i = 0; i < firstName.length; i++){
	console.log(`${i + 1}. ${firstName[i]} ${lastName[i]}`)
}
// #2 
for (let i = 0; i < firstName.length; i++){
	console.log(`${firstName[i]} ${lastName[i]}`)
}
console.log(`Total students: ${firstName.length}`) //console.log("\nTotal students: " + firstName.length)
// #3
for (let i = 0; i < firstName.length; i++){
	console.log(`${firstName[i]} ${lastName[i]}, contains ${firstName[i].length + lastName[i].length} letters`)
}*/

// #1 + #2 + #3
for (let i = 0; i < firstName.length; i++){
	console.log(`${i + 1}. ${firstName[i]} ${lastName[i]}, contains ${firstName[i].length + lastName[i].length} letters`)
}

console.log(`\nTotal students: ${firstName.length}`) //console.log("\nTotal students: " + firstName.length)
