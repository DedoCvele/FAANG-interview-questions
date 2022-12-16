/* 
Given the head of a singly linked list, return true if it is a 
palindrome
or false otherwise.
*/

function palindrome(arr){
    let L = 0;
    let R = arr.length - 1;

    for(let i=0; i<=Math.floor(arr.length/2); i++){
        if(arr[L] !== arr[R]){
            return false
        }else{
            L++;
            R--;
            continue;
        }
    }
    return true;
}

console.log(palindrome([1,2]))