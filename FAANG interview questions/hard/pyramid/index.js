/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

function pyramid(int){

    const collum = 2 * int - 1
    const middle = Math.floor(collum/2)

    for(let i=0; i<int; i++){
        let step = ""
        for(let j=0; j<collum; j++){

            if(j>= middle - i && j <= middle + i){
                step += "#"
            }else{
                step += " "
            }
        }
        console.log(step)
    }

}

pyramid(3)