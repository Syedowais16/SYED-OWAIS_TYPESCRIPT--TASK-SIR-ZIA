// QUESTION NO 16
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end 
// of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

let dinner_list: string[] = ["sir zia" , "muhammad qasim" , "imran khan" , "dr noman islam"];
// for (let index = 0; index < dinner_list.length; index++) {
// console.log("dear " + dinner_list[index] + " i cordially inviting you on dinner at lal qila retaurent,\
// i have love to have you there.");  
// }

console.log("good news!!! i reserved more seats in lal qila now we can invites more peaple");

dinner_list.unshift("allama iqbal");
let mid_index: number = Math.floor(dinner_list.length / 2);
dinner_list.splice(mid_index , 0 , "sir khalid");
dinner_list.push("sir imran"); //let me correct it there is no mthod of append in neither typescript nor javascript
console.log(dinner_list);
for (let index = 0; index < dinner_list.length; index++) {
console.log("dear " + dinner_list[index] + " i cordially inviting you on dinner at lal qila retaurent,\
i have love to have you there.");  
    }