// QUESTION NO 37

function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

make_shirt();

make_shirt("medium");

make_shirt("small", "my name is khan and iam not a terrorist");
