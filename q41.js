/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
var magicians_name = ["Harry poter", "Criss Angel", "Derren Brown"];
show_magicians(magicians_name);
