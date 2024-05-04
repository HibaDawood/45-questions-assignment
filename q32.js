/*32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
//Array if current users
var current_users = ["Hamza", "hammad", "Alya", "Huraira", "Tuba"];
//Array if new users
var new_users = ["Ashrib", "Hammad", "Yusha", "Irha ", "Alya"];
//loop through user_name to check fir userNames availability
new_users.forEach(function (new_one_user) {
    var our_condition = current_users.some(function (current_one_users) {
        return current_one_users.toLowerCase() === new_one_user.toLowerCase();
    });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is Already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available."));
    }
});
