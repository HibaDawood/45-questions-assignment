/*16. More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to
the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
//part 1 start
var guestArray = ["Yumna", "Nisha", "Rabia"];
var canNotAttend = "Nisha";
var newGuest = "Hunain";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
// console.log(guestArray);
/*guestArray.map((items) =>
  console.log(
    "Dear " +
      items +
      ", I found bigger dinner table so I am invited more peoples."
  )
);*/
//part 2 Began
var guestBiginner = "Umar";
guestArray.unshift(guestBiginner);
// console.log(guestArray);
//part 3 Middle
var middleGuest = "Laraib";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
// console.log(guestArray);
//part 4 appened
guestArray.push("Yahya");
// console.log(guestArray);
//part 5
guestArray.map(function (items) {
    return console.log("Dear " + items + ", you are invited in the more people catogory on dinner.");
});
