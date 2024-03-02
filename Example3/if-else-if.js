//Example
let num = 10;

if (num > 0) {
  console.log("Number is positive.");
} else if (num < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}


//example2: if else if
const password = 'pas$word12345';

if(password.length >= 12){
  console.log ('password is very strong so WELCOME!!!');
} else if(password.length >= 8){
  console.log ('WELCOME!!!');
} else{
  console.log('SORRY!!! the password is too short');
}