/*
Your task is to make a function that can take any 
non-negative integer as an argument and return it with
its digits in descending order. 
Essentially,rearrange the digits to create the highest
possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
function descendingOrder(n){
  // Convert to arrays and sort 
  let str = String(n).split('')
  let arr= str.sort((a,b)=> b-a);
  // Convert back to numbers
  
  let num = Number( str.join('')) 
  
  return num 
}
