// const password = 'pas$word';

// if(password.length >= 12){
//   console.log ('password is very strong so WELCOME!!!');
// } else if(password.length >= 8){
//   console.log ('WELCOME!!!');
// } else{
//   console.log('SORRY!!! the password is too short');
// }

//value if true : value if false

// let password = 'pas$word';

// password = password.length >= 12 ? console.log ('password is very strong so WELCOME!!!') 
//         : password.length >= 8? console.log ('WELCOME!!!')
//                                 : console.log('SORRY!!! the password is too short');


// //give this out for exercise
// let number = -5;

// if (number > 0) {
//   console.log("Number is positive.");
// } else {
//   console.log("Number is negative.");
// }

//Ternary
// let number = -5;
// let result = number > 0 ? "Number is positive." 
//                         : "Number is negative.";
// console.log(result);

//---------------------------------------------Inventory------------------------------------------//
// //normal conditional
// let product = {
//         product_name: "Chocolate",
//         quantity_in_stock: 100,
//         unit_price: 5.00
//     };
    
//     // Apply a special discount if the stock exceeds 80 units using if-else
//     if (product.quantity_in_stock > 80) {
//         product.unit_price *= 0.9;  // Apply a 10% discount
//     }
    
//     console.log(`The adjusted price of ${product.product_name} is $${product.unit_price.toFixed(2)}.`);
    
//Ternary
// let product = {
//         product_name: "Chocolate",
//         quantity_in_stock: 100,
//         unit_price: 5.00
//     };
    
//     // Apply a special discount if the stock exceeds 80 units
//     product.unit_price = product.quantity_in_stock > 80 ? product.unit_price * 0.9 
//                                                    : product.unit_price;
    
//     console.log(`The adjusted price of ${product.product_name} is $${product.unit_price.toFixed(2)}.`);
    


