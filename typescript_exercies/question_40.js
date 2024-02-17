// QUESTION NO 40
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("SHUBH", "WE ROLLIN", 1);
var album2 = make_album("EMIWAY BANTAI", "MOONSOON EP ", 8);
var album3 = make_album("rahat fateh ali khan", "zaroori tha", 1);
console.log(album1);
console.log(album2);
console.log(album3);
