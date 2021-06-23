/**
 * Create a variable that stores the value 'Hello CareerDevs!'. 
    Your program should output every number 1 through 18
	AND output every other character of ‘Hello CareerDevs!’ on a separate line
    use ONLY ONE  for-loop.
	Your solution can only have two variables total. 
    The “i” variable in your for-loop, and the variable that holds 'Hello CareerDevs!'. 
 */

var str = 'Hello CareerDevs!'

for(let i = 0; i <= str.length; i++){
    console.log(i + 1)
    if(i % 2 == 0){
        console.log(str[i])
    }
}