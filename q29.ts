/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

let favorite_fruits: string[] = ["strawberry", "mango", "cherry"];


//using 5 independent if statement
if(favorite_fruits.includes("mango")){
    console.log("I realy like mango.")
}
if(favorite_fruits.includes("strawberry")){
    console.log("I realy like strawberry.")
}
if(favorite_fruits.includes("orange")){
    console.log("I realy like orange.")
}
if(favorite_fruits.includes("cherry")){
    console.log("I realy like cherry.")
}
if(favorite_fruits.includes("apple")){
    console.log("I realy like apple.")
}