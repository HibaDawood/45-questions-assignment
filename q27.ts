/*27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.
• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//if and else if statements
//version 1
let alienColor: string = "green";

if (alienColor === "green") {
  console.log("(version 1) you shot down green alien you have earned 5 point.");
} else if (alienColor === "yellow") {
  console.log("you shot down red alien you have earned 10 point.");
} else if (alienColor === "red") {
  console.log("you shot down yellow alien you have earned 15 point.");
}

// version 2

let alienColor2: string = "yellow";

if (alienColor2 === "green") {
  console.log("you shot down green alien you have earned 5 point.");
} else if (alienColor2 === "yellow") {
  console.log("(version 2) you shot down red alien you have earned 10 point.");
} else if (alienColor2 === "red") {
  console.log("you shot down yellow alien you have earned 15 point.");
}

// version 3

let alienColor3: string = "red";

if (alienColor3 === "green") {
  console.log("you shot down green alien you have earned 5 point.");
} else if (alienColor3 === "yellow") {
  console.log("you shot down red alien you have earned 10 point.");
} else if (alienColor3 === "red") {
  console.log(
    "(version 3) you shot down yellow alien you have earned 15 point."
  );
}
