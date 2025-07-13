//Task 1: Create the Order System. Create a multi-dimensional array called orders with two rows: The first row stores three drink 
//orders (e.g., “Latte”, “Tea”, “Espresso”). The second row stores three pastry orders (e.g., “Croissant”, “Muffin”, “Bagel”).

let orders = [
    ["Latte", "Tea", "Espresso"],
    ["Croissant", "Muffin", "Bagel"]
  ];
//console.log(orders);

//Task 2: Log the number of drinks and number of pastries by using .length on each row

//the array of drink orders).
console.log("number of drinks:", orders[0].length);
//the array of pastry orders).
console.log("number of pastries:", orders[1].length);

//Task 3: Access Orders Using Bracket Notation Use bracket notation to log a specific drink and a specific pastry using
//hardcoded numbers. For example, you might want to log the first drink and last pastry. Do this for three combinations.

//the first item in the drinks list.
console.log("first drink:", orders[0][0]);
//the third item in the pastries list
console.log("last pastry:", orders[1][2]);
//the second item in the drinks list.
console.log("second drink:", orders[0][1]);

//Task 4: Access Orders Dynamically with Variables
let drinkIndex = 2;
let pastryIndex = 1;

console.log("selected drink:", orders[0][drinkIndex]);
console.log("selected pastry:", orders[1][pastryIndex]);

//Task 5: Write a loop that logs all the items in the drink category, ensuring the loop dynamically adjusts to the number of items using .length.
for (let i = 0; i < orders[0].length; i++) {
    console.log("drink order:", orders[0][i]);
  }


//Task 6: Add a New Order & Track Length Suppose a new order has been placed: a customer ordered a flat white. 
// Add “flat white” to the drinks category dynamically. Log the updated number of drinks after the addition.
//Declare two variables and use them with bracket notation to log the selected orderdynamically.

orders[0].push("Flat White");

console.log("updated number of drinks:", orders[0].length); 

// Drinks category
let categoryIndex = 0; 
// Last item index              
let orderIndex = orders[0].length - 1;

console.log("Newly added drink:", orders[categoryIndex][orderIndex]);


