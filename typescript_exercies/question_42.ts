// QUESTION NO 42


function show_magicians(magicians: string[]): void 
{
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] 
{
    let great_magicians: string[] = [];
    for (let magician of magicians) 
    {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}


let magician_names: string[] = ["faad magician", "zack", "jadugar 3", "jadugar 4"];

let great_magicians: string[] = make_great(magician_names);

show_magicians(great_magicians);