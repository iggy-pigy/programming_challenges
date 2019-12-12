function songDecoder(song) {
    const newSong = song.replace(/WUB/g, " ").split(/\s+/).join(' ').trim();
    return newSong;
}

module.exports = songDecoder;