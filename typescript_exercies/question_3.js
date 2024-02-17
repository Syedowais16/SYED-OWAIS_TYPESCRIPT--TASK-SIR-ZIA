// QUESTION NO 3
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.
var name1 = "syed muhammad owais shah";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
// for titlecase typescript did not have any predifined method so we have to make some logic here using
// function 
function titlecasename(input) {
    return input.toLowerCase().replace(/(^|\s)\S/g, function (firstLetter) { return firstLetter.toUpperCase(); });
}
var name2 = "syed muhammad owais shah";
var titleCaseString = titlecasename(name2);
console.log(titleCaseString);
