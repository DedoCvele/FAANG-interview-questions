/* 
Roman numerals are represented by seven different 
symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000


*/

/* Brute Force */

function romanToInt(arr) {
  let Numb = 0;

  for (let i = 0; i <= arr.length; i++) {

    if (arr[i] === "I") {
      if (arr[i + 1] === "V") {
        Numb += 4;
        i++;
      } else if (arr[i + 1] === "X") {
        Numb += 9;
        i++;
      } else {
        Numb++;
      }

    } else if (arr[i] == "V") {

      Numb += 5;

    } else if (arr[i] === "X") {

      if (arr[i + 1] === "L") {
        Numb += 40;
        i++;
      } else if (arr[i + 1] === "C") {
        Numb += 90;
        i++;
      } else {
        Numb += 10;
      }

    } else if (arr[i] == "L") {

      Numb += 50;

    } else if (arr[i] == "C") {

        if (arr[i + 1] === "D") {
            Numb += 400;
            i++;
          } else if (arr[i + 1] === "M") {
            Numb += 900;
            i++;
          } else {
            Numb += 100;
          }

    } else if (arr[i] == "D") {
      Numb += 500;
    } else if (arr[i] == "M") {
      Numb += 1000;
    }
  }

  
  return Numb;
}

romanToInt("DCXXI");
