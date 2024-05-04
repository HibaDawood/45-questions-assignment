"use strict";
/* *18. Seeing the World: Think of at least five places in the world you’d like to visit.
 • Store the locations in a array. Make sure the array is not in alphabetical order.

 • Print your array in its original order.

 • Print your array in alphabetical order without modifying the actual list.

 • Show that your array is still in its original order by printing it.

 • Print your array in reverse alphabetical order without changing the order of the original list.

 • Show that your array is still in its original order by printing it again.

 • Reverse the order of your list. Print the array to show that its order has changed.

 • Reverse the order of your list again. Print the list to show it’s back to its original order.

 • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

 • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed*/
//Task 18
// store the location in an array
let placesToVisit = ["Maldives", "Paris", "Korea", "China", "Qatar"];
// print the array in its original order
console.log("Original order:", placesToVisit);
// print the array in alphabetic order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
// show that the array is still its origal order
console.log("origal order after sorting:", placesToVisit);
// print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
// show that the array is still in its original order
console.log("Orginal order after reverse sorting;", placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("Rrversed order:", placesToVisit);
// revers the order of the list agian to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
// sort the array in alphabetical order
placesToVisit.sort();
console.log("Stored in alphabetical order:", placesToVisit);
//reverse the array in reverse lphabetic order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sortted in reverse alphabetic order:", placesToVisit);
