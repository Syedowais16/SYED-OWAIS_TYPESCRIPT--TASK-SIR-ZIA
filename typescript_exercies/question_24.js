// QUESTION NO 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
var str1 = "owais";
var str2 = "ali";
var str3 = "Ahmed";
console.log("Equality and Inequality with Strings:");
console.log(str1 === str2);
console.log(str1 !== str3);
// Tests using the lower case function
console.log("\nTests using the lower case function:");
console.log(str1.toLowerCase() === "hello");
console.log(str2.toLowerCase() === "World");
var num1 = 15;
var num2 = 30;
console.log("\nNumerical Tests:");
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 == 15);
console.log(num2 != 30);
console.log("\nTests using 'and' and 'or' operators:");
console.log(num1 > 5 && num2 < 40);
console.log(num1 < 5 || num2 > 40);
var vegetables = ["potatoes", "tomatoes", "lady finger"];
console.log("\nTest whether an item is in an array:");
console.log(vegetables.indexOf("potatoes"));
console.log(vegetables.indexOf("couliflower"));
console.log("\nTest whether an item is not in an array:");
console.log(!vegetables.indexOf("carrot"));
console.log(!vegetables.indexOf("tomatoes"));
