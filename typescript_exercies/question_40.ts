// QUESTION NO 40


function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) 
    {
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album("SHUBH", "WE ROLLIN", 1);
let album2 = make_album("EMIWAY BANTAI", "MOONSOON EP " , 8);
let album3 = make_album("rahat fateh ali khan", "zaroori tha", 1);

console.log(album1);
console.log(album2);
console.log(album3);
