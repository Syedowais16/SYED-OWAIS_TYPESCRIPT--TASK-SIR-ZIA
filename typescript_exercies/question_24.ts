// QUESTION NO 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

let str1: string = "owais";
let str2: string = "ali";
let str3: string = "Ahmed";

console.log("Equality and Inequality with Strings:");
console.log(str1 === str2); 
console.log(str1 !== str3); 

// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(str1.toLowerCase() === "hello"); 
console.log(str2.toLowerCase() === "World"); 

let num1: number = 15;
let num2: number = 30;

console.log("\nNumerical Tests:");
console.log(num1 < num2); 
console.log(num1 >= num2); 
console.log(num1 == 15); 
console.log(num2 != 30); 

console.log("\nTests using 'and' and 'or' operators:");
console.log(num1 > 5 && num2 < 40); 
console.log(num1 < 5 || num2 > 40);

let vegetables: string[] = ["potatoes", "tomatoes", "lady finger"];
console.log("\nTest whether an item is in an array:");
console.log(vegetables.indexOf("potatoes")); 
console.log(vegetables.indexOf("couliflower")); // -1 means false


console.log("\nTest whether an item is not in an array:");
console.log(!vegetables.indexOf("carrot")); 
console.log(!vegetables.indexOf("tomatoes")); 
