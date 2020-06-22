// Action creator

export const selectSong = (song) => {
    // create action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
}