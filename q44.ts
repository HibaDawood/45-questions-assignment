/*44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.*/

function makeSandwich(...items: string[]) {
  console.log("\nMaking asandwich with following items:\n");

  items.forEach((singleItems) => console.log("-" + singleItems));

  console.log("\nNow Enjoy Sandwich!");
}

makeSandwich("Cheese", "Egg", "Butter", "Mayo");

makeSandwich("Cheese", "Egg", "Bread");

makeSandwich("Bread", "Egg", "Tomato", "Lettuce");
