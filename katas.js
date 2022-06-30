/**
 * JavaScript Kata Training
 * Codewars Challenges
 * @author: junowoz
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 1
 * Complete the solution so that it reverses the string passed into it.
 *  'world'  =>  'dlrow'
 *  'word'   =>  'drow'
 */

function solution(str){  
    return str.split("").reverse().join("");
}

solution("world")
solution('word')


// i will be an integer. Double it and return it.
function doubleInteger(i) {
  i *= 2;
  return i;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 2
 * We need a function that can transform a number into a string.
 * What ways of achieving this do you know?
 * Examples:
 * 123 --> "123"
 * 999 --> "999"
 */
function numberToString(num) {
  // Return a string of the number here!
  return num.toString()
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 3
 * 
 * There was a test in your class and you passed it. Congratulations!
 * But you're an ambitious person. You want to know if you're better than the average student in your class.
 * You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * Return True if you're better, else False!
 */

function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let average = 0
  
  for (let i in classPoints){
    average += (classPoints[i]) / (classPoints.length)
  }
  
  if (yourPoints > average){
    return true
  } else {
    return false
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 4
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
 * Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
 * n= 5, m=5: 25
 */

function paperwork(n, m) {
  if (n < 0 || m < 0)
    return 0
  else
    return n* m
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 5
 * Implement a function which multiplies two numbers.
 */
//The shortest way I found
const multiply = (a, b) => a * b 

//The long way
function multiply(a, b) {
  return a * b
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** 6
 * Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
 * Use conditionals to return the proper message:
 */

function greet (name, owner) {
  // Add code here
      if (name == owner)
        return 'Hello boss'
      else
        return 'Hello guest'
}