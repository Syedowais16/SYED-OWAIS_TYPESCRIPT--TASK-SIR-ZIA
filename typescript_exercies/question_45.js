// QUESTION NO 45
function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        for (var key in extra) {
            carInfo[key] = extra[key];
        }
    }
    return carInfo;
}
var car = createCar("Toyota", "Corolla", { color: "red" }, { features: ["navigation", "sunroof"] });
console.log(car);
