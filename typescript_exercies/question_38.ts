//  QUESTION NO 38


function describe_city(city: string, country: string = "Pakistan"): void 
{
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("abu dhabi", "dubai");
