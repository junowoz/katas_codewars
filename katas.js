/**
 * Codewars Challenges
 * @author: junowoz
 */


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