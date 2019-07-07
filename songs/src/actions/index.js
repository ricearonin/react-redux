//Action creator

export const selectSong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

//we may want to export multiple functions, we are going to create a named export by placing export in front of function declaration
