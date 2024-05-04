"use strict";
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let cherry = "cherry";
// • Tests for equality and inequality with strings
console.log("Is cherry is equal to cherry?");
console.log(cherry == cherry);
console.log("\nIs cherry is not equal to cherry?");
console.log(cherry != "cherry");
// • Tests using the lower case function
let upperCase = "CHERRY";
console.log("\nIs CHERRY is eqaul to cherry after converting to lowerCase?");
console.log(upperCase.toLowerCase() == "cherry");
console.log("\nIs CHERRY is eqaul to cherry after converting to lowerCase?");
console.log(upperCase.toLowerCase() != "cherry");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let fifty = 50;
let hundred = 100;
//Equal to
console.log("\nIs hundred is equal to fifty?");
console.log(hundred == fifty);
//Not equal to
console.log("\nIs hundred is not equal to fifty?");
console.log(hundred != fifty);
//Greater than
console.log("\nIs hundred is greater than zero?");
console.log(hundred > 0);
//less than
console.log("\nIs fifty is smaller than ten?");
console.log(fifty < 0);
//greater than or equal to
console.log("\nIs fifty is greater than or equal to twenty?");
console.log(fifty >= 20);
//less than or equal to
console.log("\nIs fifty is less than or equal to twenty?");
console.log(hundred <= 10);
// • Tests using "and" and "or" operators
//using && (and)
console.log("\nhundred is not equal to fifty and hundred is greater than fifty");
console.log(hundred != 50 && hundred > 50);
console.log("\nhundred is not equal to fifty and fifty is greater than sixty");
console.log(hundred != 50 && fifty > 60);
//using || (or)
console.log("\nhundred is greater than 200 or hundred is equal to hundred");
console.log(100 > 200 || 100 == 100);
console.log("\nfifty is greater than hundred or fifty is not equal to fifty");
console.log(50 > 100 || 50 != 50);
// • Test whether an item is include in array
let fruits = ["Orange", "Peach", "Guava"];
console.log("\nIs Orange include in my fruit array");
console.log(fruits.includes("Orange"));
//not include
console.log("\nIs Orange not include in my fruit array");
console.log(!fruits.includes("Orange"));
