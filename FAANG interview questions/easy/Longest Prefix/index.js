/* 
Write a function to find the longest common prefix string
 amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function preFix(strs) {
  let longestPreFix = ""

  if(strs.length === 0){
    return longestPreFix;
  }

  strs.sort();
  let first = strs[0];
  let last = strs[strs.length - 1];

  for(let i=0; i < first.length; i++){
    if(first[i] === last[i]){
        longestPreFix += first[i]
    }else{
        return longestPreFix
    }
  }

  return longestPreFix
}

console.log(preFix(["flower", "flow", "flight"]));
