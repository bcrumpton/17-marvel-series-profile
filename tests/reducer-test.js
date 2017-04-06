import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('When loading series info replace the old series info', (assert) => {
    const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
    const action = { type: 'SERIESINFO@LOAD_COMPLETE', data: { name: 'Spiderman' } };
    const expectedResult = { characterData: [], comicData: [], seriesInfo: { name: 'Spiderman' }, modal: null };

    assert.deepEqual(reducer(oldState, action), expectedResult);
  });

  test('When loading character data replace the character data', (assert) => {
    const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
    const action = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: { name: 'Spiderman' } };
    const expectedResult = { characterData: { name: 'Spiderman' }, comicData: [], seriesInfo: null, modal: null };

    assert.deepEqual(reducer(oldState, action), expectedResult);
  });

  test('When loading comic data replace the comic data', (assert) => {
    const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
    const action = { type: 'COMICS@FIND_ALL_COMPLETE', data: { name: 'Spiderman' } };
    const expectedResult = { characterData: [], comicData: { name: 'Spiderman' }, seriesInfo: null, modal: null };

    assert.deepEqual(reducer(oldState, action), expectedResult);
  });
  test('When adding modal data replace the old modal data', (assert) => {
    const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
    const action = { type: 'MODAL@SET', data: { name: 'Spiderman' } };
    const expectedResult = { characterData: [], comicData: [], seriesInfo: null, modal: { name: 'Spiderman' } };

    assert.deepEqual(reducer(oldState, action), expectedResult);
  });

  test('When clearing modal data set the modal state to "null"', (assert) => {
    const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
    const action = { type: 'MODAL@CLEAR', data: null };
    const expectedResult = { characterData: [], comicData: [], seriesInfo: null, modal: null };

    assert.deepEqual(reducer(oldState, action), expectedResult);
  });
});
