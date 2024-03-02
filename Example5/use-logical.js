let x = 6;
let y = 3;

if (x < 10 && y > 1) {
console.log("x is less than 10 and y is greater than 1" ,"true");
}
else {
console.log("x is less than 10 and y is greater than 1","false");
}



//logical Operators - OR || and AND &&
const password = 'pas$word1990Me';

if(password.length >= 12 && password.includes('$')){
  console.log ('password is very strong so WELCOME!!!');
} else if(password.length >= 8){
  console.log ('WELCOME!!!');
} else{
  console.log('SORRY!!! the password is too short');
}


//logical NOT(!)
//Example: if we want to check if the user loging or not

let user = false; 
if (!user){ //if only go in the block if it's true
    console.log('SORRY!!! you need to login first');
}

// let x = 11;
// if (!(x == 10)) {
//     console.log('x is not equal 10');
// }