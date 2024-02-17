// QUESTION NO  17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, 
// print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var dinner_list = ["sir zia", "muhammad qasim", "imran khan", "dr noman islam"];
for (var index = 0; index < dinner_list.length; index++) {
    console.log("dear " + dinner_list[index] + " i cordially inviting you on dinner at lal qila retaurent,\
i have love to have you there.");
}
console.log("bad news! the reservation cancelled at last moment \
now only two peaple can allowed to attend dinner ");
while (dinner_list.length > 2) {
    var Guest_not_attending = dinner_list.pop();
    console.log("Sorry, ".concat(Guest_not_attending, ", but we can't invite you to dinner."));
}
for (var index = 0; index < dinner_list.length; index++) {
    console.log("dear " + dinner_list[index] + " i cordially inviting you remaining guest on dinner at lal qila retaurent,\
i have love to have you there.");
}
console.log("final dinner list : " + dinner_list);
