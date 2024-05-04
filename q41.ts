/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

//Define the function to show magicians names
function show_magicians(Magicians: string[]) {
  Magicians.forEach((name) => console.log(name));
}

//Define an array of magicians names
let magicians_name: string[] = ["Harry poter", "Criss Angel", "Derren Brown"];

//calling a function
show_magicians(magicians_name)
