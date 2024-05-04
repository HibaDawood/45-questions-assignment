/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
function make_shirt(size, message) {
    console.log("you selected ".concat(size, " size shirt with ").concat(message, " prints on a shirt."));
}
make_shirt("medium", "let's code");
make_shirt("short", "let's code");
