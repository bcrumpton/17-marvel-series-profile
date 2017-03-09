
function parseJson(r) {
  return r.json();
}

export function seriesInfoLoadComplete() {
  return {
    type: 'SERIES@FIND_ALL_COMPLETE',
    data
  };
}

export function charactersFindForId(data = []) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data
  };
}

export function comicsFindForId(data = []) {
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


export function seriesInfoSearch(name) {
  return dispatch => fetch('http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}')
  .then(parseJson)
  .then((response) => {
    const series = response.data.results[0];
    dispatch(seriesInfoLoadComplete(series));
    dispatch(charactersFindForId(series.id));
    dispatch(comicsFindForId(series.id));
  });
}
