/* 
Given two strings ransomNote and magazine, 
return true if ransomNote can be constructed by using the 
letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

function canConstruct(ransomNote, magazine) {

   let ransomNoteChars = {};

  
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i];
    if (ransomNoteChars[char]) {
      ransomNoteChars[char]++;
    } else {
      ransomNoteChars[char] = 1;
    }
  }


  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    if (ransomNoteChars[char]) {
      ransomNoteChars[char]--;
    }
  }


  for (let char in ransomNoteChars) {
    if (ransomNoteChars[char] > 0) {
      return false; 
    }
  }

  return true;
}

let ransomNote = "aabc";
let magazine = "aabdce";

console.log(canConstruct(ransomNote, magazine));
