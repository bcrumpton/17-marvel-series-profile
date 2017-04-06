export function seriesInfoLoadComplete(data = []) {
  return {
    type: 'SERIESINFO@LOAD_COMPLETE',
    data
  };
}

export function charactersLoadComplete(data = []) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data
  };
}

export function comicsLoadComplete(data = []) {
  return {
    type: 'COMICS@FIND_ALL_COMPLETE',
    data
  };
}

export function modalSet(data = []) {
  return {
    type: 'MODAL@SET',
    data
  };
}

export function modalClear(data = []) {
  return {
    type: 'MODAL@CLEAR',
    data
  };
}

export function charactersFindForId(id) {
  return dispatch => fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/characters`)
  .then(response => response.json())
  .then((data) =>  {
    const characters = data.data.results;
    dispatch(charactersLoadComplete(characters));
  });
}


export function comicsFindForId(id) {
  return dispatch => fetch(`http://marvel-is-broke.herokuapp.com/series/${id}/comics`)
  .then(response => response.json())
  .then((data) => {
    const comics = data.data.results;
    dispatch(comicsLoadComplete(comics));
  });
}

export function seriesInfoSearch(name) {
  return dispatch => fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
  .then(response => response.json()
  .then((data) => {
    const series = data.data.results[0];
    dispatch(seriesInfoLoadComplete(series));
    dispatch(charactersFindForId(series.id));
    dispatch(comicsFindForId(series.id));
  }));
}
