// QUESTION NO 45
function createCar(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    let carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    for (let extra of extras) {
        for (let key in extra) {
            carInfo[key] = extra[key];
        }
    }

    return carInfo;
}
let car = createCar("Toyota", "Corolla", { color: "red" }, { features: ["navigation", "sunroof"] });

console.log(car);

