//QUESTION NO 6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning
// and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.

let person_name1:string = "\t\n  owais shah  \t\n";
console.log("with spaces : \n" + person_name1 );
console.log("after removing spaces : \n" + person_name1.trim());