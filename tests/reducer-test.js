import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('When loading series info replace the old series info', (assert) => {
    const oldState = { characterData: [], comicData: [], seriesInfo: null, modal: null };
    const action = { type: 'SERIESINFO@FIND_ALL_COMPLETE', data: { name: 'Spiderman' } };
    const expectedResult = { characterData: [], comicData: [], seriesInfo: 'Spiderman', modal: null };

    assert.deepEqual(reducer(oldState, action), expectedResult);
  });

  test('When loading character data replace the character data', (assert) => {

  });

  test('When loading comic data replace the comic data', (assert) => {


  test('When adding modal data replace the old modal data', (assert) => {

  });

  test('When clearing modal data set the modal state to "null"', (assert) => {

  });
});
