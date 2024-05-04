/*37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
//making a function
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "'I love typescript'"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(message, " prints on shirt."));
}
//calling a function with  by default values
make_shirt();
//calling a function with medium size and default messsage
make_shirt("Medium");
//calling a function with any size and different messsage
make_shirt("short", "'I am a programer'");
