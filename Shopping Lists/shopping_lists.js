
// Array created for shopping lists

var shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

// Fruit Loops added to the end of the shopping list

shoppingList.push('fruit loops');

// Coffee string updated in index 4

shoppingList[4] = 'fair trade coffee';

// Chips and Salsa replaced with rice and beans

shoppingList[2] = 'rice';
shoppingList[3] = 'beans';

// Created new array for shopping cart

shoppingCart = new Array();

// Removed last item on the shopping list (fruit loops) and placed it in the cart

shoppingCart[0] = shoppingList.pop();

//Removing Pop Tarts from the shopping list

var firstItemRemoved = shoppingList.shift();

//Adding Pop Tarts to the shopping cart

shoppingCart.push(firstItemRemoved);

// Move all items to the shopping cart 

while (shoppingList.length > 0) {
var emptyTheList = shoppingList.pop();
shoppingCart.push(emptyTheList);
};

// Sorting alphabetically and backwards using chaining

shoppingCart.sort().reverse();

// Create as string
shoppingCart.join(', ');

