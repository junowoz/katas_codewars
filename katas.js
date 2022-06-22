/**
 * JavaScript Kata Training
 * Codewars Challenges
 * @author: junowoz
 */

//////////////////////////////////////////////////////////////
/**
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

//////////////////////////////////////////////////////////////
/**
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

//////////////////////////////////////////////////////////////
/**
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