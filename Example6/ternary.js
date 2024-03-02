// const password = 'pas$word';

// if(password.length >= 12){
//   console.log ('password is very strong so WELCOME!!!');
// } else if(password.length >= 8){
//   console.log ('WELCOME!!!');
// } else{
//   console.log('SORRY!!! the password is too short');
// }

//value if true : value if false

let password = 'pas$word';

password = password.length >= 12 ? console.log ('password is very strong so WELCOME!!!') 
        : password.length >= 8? console.log ('WELCOME!!!')
                                : console.log('SORRY!!! the password is too short');


// //give this out for exercise
// let number = -5;

// if (number > 0) {
//   console.log("Number is positive.");
// } else {
//   console.log("Number is negative.");
// }



//Ternary
let number = -5;
let result = number > 0 ? "Number is positive." 
                        : "Number is negative.";
console.log(result);
