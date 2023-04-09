/*
Find the volume of a cone whose radius and height are
provided as parameters to the function volume.
Use the value of PI provided by your language 
(for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) 
and round down the volume to an Interger.

I felt you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)

*/
function volume(r,h) {
//your code here!
  let result = (Math.PI) * (r**2 * h)*1/3
  return Math.floor(result)
}
