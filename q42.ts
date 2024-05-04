/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/

//Define the function to show magicians names
function show_magicians(Magicians: string[]) {
  Magicians.forEach((name) => console.log(name));
}

function make_great(Magicians: string[]) {
  return Magicians.map((name) => `The Great ${name}`);
}

//Define an array of magicians names
let magicians_name: string[] = ["Harry poter", "Criss Angel", "Derren Brown"];

let great_magicians = make_great(magicians_name);

show_magicians(great_magicians);
