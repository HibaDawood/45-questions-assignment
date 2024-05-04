/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
//Define the function to show magicians names
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magicians names
var magicians_name = ["Harry poter", "Criss Angel", "Derren Brown"];
var great_magicians = make_great(magicians_name);
show_magicians(great_magicians);
