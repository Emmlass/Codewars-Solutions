/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

isPalindrome = (x) => (x.split("").reverse().join('').toLowerCase() === x.toLowerCase())? true : false;
