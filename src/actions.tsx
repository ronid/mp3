export const playSong = songID => ({
  songID,
  type: 'SET_SONG'
});

export const playNext = (songID) => {
  return {
    songID,
    type: 'PLAY_NEXT'
  }
};


export const playPrevious = (songID) => {
  return {
    songID,
    type: 'PLAY_PREVIOUS'
  }
};

export const setPlaylist = (name) => ({
  name,
  type: 'SET_PLAYLIST'
});
