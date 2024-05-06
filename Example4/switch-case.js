// //switch statment. it compare using === behind the sence, if you declare a grade "50" in the case have to be "50" because it check the type aswell
// const score = 85;

// switch (true) {
// 	// If score is 90 or greater
// 	case score >= 90:
// 		console.log(" You are grad is A");
// 		break;
// 	// If score is 80 or greater
// 	case score >= 80:
// 		console.log("You are grad is B");
// 		break;
// 	// If score is 70 or greater
// 	case score >= 70:
// 		console.log("You are grad is C");
// 		break;
// 	// If score is 60 or greater
// 	case score >= 60:
// 		console.log("You are grad is D");
// 		break;
// 	// Anything 59 or below is failing
// 	default:
// 		console.log("You are grad is F");
// }


// const score = 85;

// switch (score) {
//   case score >= 90:
//     console.log("Your grade is A");
//     break;
//   case score >= 80:
//     console.log("Your grade is B");
//     break;
//   case score >= 70:
//     console.log("Your grade is C");
//     break;
//   case score >= 60:
//     console.log("Your grade is D");
//     break;
//   default:
//     console.log("Your grade is F");
// }


// //if you use the score for switch it will compare from the first case 
// let score = 75;
// let grade;

// switch (true) {
//   case score >= 90:
//     grade = "A";
//     break;
//   case score >= 80:
//     grade = "B";
//     break;
//   case score >= 70:
//     grade = "C";
//     break;
//   case score >= 60:
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log(`Your grade is ${grade}.`);

// function calculateShippingCost(weight) {
//     switch (true) {
//       case weight <= 0:
//         return "Weight must be positive";
//       case weight <= 2:
//         return "Shipping cost is $5";
//       case weight <= 5:
//         return "Shipping cost is $10";
//       case weight <= 10:
//         return "Shipping cost is $15";
//       default:
//         return "Shipping cost is $20";
//     }
//   }
  
//   console.log(calculateShippingCost(3)); // Outputs: Shipping cost is $10
 
//with weight won't not working as you expect becasue of it will looking for the exact number than range
// function calculateShippingCost(weight) {
//     switch (weight) {
//       case weight <= 0:
//         return "Weight must be positive";
//       case weight <= 2:
//         return "Shipping cost is $5";
//       case weight <= 5:
//         return "Shipping cost is $10";
//       case weight <= 10:
//         return "Shipping cost is $15";
//       default:
//         return "Shipping cost is $20";
//     }
//   }
  
//   console.log(calculateShippingCost(3)); // Outputs: Shipping cost is $10
  

//------------------------------------------------Inventory----------------------------------------------//

// let products = {
//   product_name: "Chocolate",
//   quantity_in_stock: 7,
//   unit_price: 5
// };


// switch (true) {
//   case products.quantity_in_stock === 0:
//       console.log(`${products.product_name} is out of stock. An urgent reorder is needed.`);
//       break;
//   case products.quantity_in_stock > 0 && products.quantity_in_stock <= 10:
//       console.log(`${products.product_name} has low stock. Consider reordering soon.`);
//       break;
//   case products.quantity_in_stock > 10 && products.quantity_in_stock <= 50:
//       console.log(`${products.product_name} is in stock. All is well.`);
//       break;
//   case products.quantity_in_stock > 50:
//       console.log(`${products.product_name} is overstocked. Consider putting it on sale.`);
//       break;
//   default:
//       console.log(`Unknown stock status for ${products.product_name}.`);
//       break;
// }


//if else and switch make more sense
// let products = {
//   product_name: "Chocolate",
//   quantity_in_stock: 7
// };

// // Pre-determine the category
// let stockCategory;
// if (products.quantity_in_stock === 0) {
//   stockCategory = "outOfStock";
// } else if (products.quantity_in_stock > 0 && products.quantity_in_stock <= 10) {
//   stockCategory = "lowStock";
// } else if (products.quantity_in_stock > 10 && products.quantity_in_stock <= 50) {
//   stockCategory = "normalStock";
// } else {
//   stockCategory = "overstock";
// }

// // Now use switch to perform actions based on stock category
// switch (stockCategory) {
//   case "outOfStock":
//       console.log(`${products.product_name} is out of stock. An urgent reorder is needed.`);
//       break;
//   case "lowStock":
//       console.log(`${products.product_name} has low stock. Consider reordering soon.`);
//       break;
//   case "normalStock":
//       console.log(`${products.product_name} is in stock. All is well.`);
//       break;
//   case "overstock":
//       console.log(`${products.product_name} is overstocked. Consider putting it on sale.`);
//       break;
//   default:
//       console.log(`Unknown stock status for ${products.product_name}.`);
//       break;
// }

