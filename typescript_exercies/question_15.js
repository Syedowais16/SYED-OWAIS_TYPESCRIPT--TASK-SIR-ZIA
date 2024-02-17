// QUESTION NO 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations.You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement 
// at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the 
// name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var dinner_list = ["sir zia", "muhammad qasim", "imran khan", "dr noman islam"];
for (var index = 0; index < dinner_list.length; index++) {
    console.log("dear " + dinner_list[index] + " i cordially inviting you on dinner at lal qila retaurent,\
i have love to have you there.");
}
// question 15 part starts here
var not_coming_name = dinner_list[3];
var replacing_guest = ["quaid e azam"];
dinner_list[3] = replacing_guest[0];
console.log("\nUnfortunately, ".concat(not_coming_name, " can't make the the dinner so he/she not coming to the dinner tonight.\n"));
for (var index = 0; index < dinner_list.length; index++) {
    console.log("dear " + dinner_list[index] + " i cordially inviting you on dinner at lal qila retaurent,\
i have love to have you there.");
}
