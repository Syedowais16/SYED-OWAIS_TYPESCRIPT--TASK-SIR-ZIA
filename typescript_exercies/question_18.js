// QUESTION NO 17
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var my_five_places = ["canada", "dubai", "paris", "malam jabba", "switzerland"];
console.log("Original order : " + my_five_places.join(", "));
console.log("\nAlphabetical Order:" + __spreadArray([], my_five_places, true).sort().join(", "));
console.log("\nOriginal Order (1):" + my_five_places.join(", "));
console.log("\nReverse Alphabetical Order:" + __spreadArray([], my_five_places, true).sort().reverse().join(", "));
console.log("\nOriginal Order (2):" + my_five_places.join(", "));
my_five_places.reverse();
console.log("\nReversed Order:" + my_five_places.join(", "));
my_five_places.reverse();
console.log("\nOriginal Order (3 after reverse):" + my_five_places.join(", "));
my_five_places.sort();
console.log("\nSorted in Alphabetical Order:" + my_five_places.join(", "));
my_five_places.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:" + my_five_places.join(", "));
