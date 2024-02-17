// QUESTION NO 21
var vehicle = [
    {
        brand: "BMW",
        manufacture: "in germany",
        category: "sedan",
        modal_year: 2022
    },
    {
        brand: "KIA",
        manufacture: "in china",
        category: "suv",
        modal_year: 2021
    },
    {
        brand: "LAND CRUISER",
        manufacture: "all over the world",
        category: "SUV , 7 seaters",
        modal_year: 2023
    }
];
console.log("List of vehicle:");
for (var index = 0; index < vehicle.length; index++) {
    console.log("Vehicle ".concat(index + 1, ":"));
    console.log("Brand: ".concat(vehicle[index].brand));
    console.log("Manufacture: ".concat(vehicle[index].manufacture));
    console.log("Category: ".concat(vehicle[index].category));
    console.log("Modal Year: ".concat(vehicle[index].modal_year, "\n"));
}
