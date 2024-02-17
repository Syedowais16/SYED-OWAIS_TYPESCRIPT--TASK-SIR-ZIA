//  QUESTION NO 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("Items selected for the sandwich:");
        for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
            var item = items_1[_a];
            console.log("- " + item);
        }
    }
    console.log("**************************************");
}
makeSandwich("lettuce", "tomato", "cheese");
makeSandwich("hotdog", "mayonnaise");
makeSandwich("beef pattie", "aloo pattie");
