// QUESTION NO 21




let vehicle: { brand: string; manufacture: string; category: string; modal_year: number; }[] = [
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
for (let index = 0; index < vehicle.length; index++) {
    console.log(`Vehicle ${index + 1}:`);
    console.log(`Brand: ${vehicle[index].brand}`);
    console.log(`Manufacture: ${vehicle[index].manufacture}`);
    console.log(`Category: ${vehicle[index].category}`);
    console.log(`Modal Year: ${vehicle[index].modal_year}\n`);
}