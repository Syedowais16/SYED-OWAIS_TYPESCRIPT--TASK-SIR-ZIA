//  QUESTION NO 44

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    } else {
        console.log("Items selected for the sandwich:");
        for (let item of items) {
            console.log("- " + item);
        }
    }
    console.log("**************************************");
}

makeSandwich("lettuce", "tomato", "cheese");
makeSandwich("hotdog", "mayonnaise");
makeSandwich("beef pattie" , "aloo pattie");
