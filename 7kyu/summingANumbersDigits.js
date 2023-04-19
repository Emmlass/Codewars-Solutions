/*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {

  // convert number digits to array of strings
  let arr = Math.abs(number).toString().split("");
  // convert string array to array of numbers and add 
  let sum = arr.map(Number).reduce((a,c)=> a + c, 0);
  return sum 
}
