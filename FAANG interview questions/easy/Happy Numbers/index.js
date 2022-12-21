/* 
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

*/


function isHappy(n) {
  // create a set to store the numbers we have seen

  let seen = new Set()

  // keep looping until we reach 1 or we enter a loop

  while((n !== 1) && !seen.has(n)){
     // add the current number to the set
    seen.add(n);

    let sum = 0;
    while (n > 0){
        let digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10)
    }
    n = sum
  }
 
  // return true if we reached 1, false otherwise
  return n === 1;
}

console.log(isHappy(19));
