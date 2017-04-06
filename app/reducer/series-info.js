export default function seriesInfo(state = null, action) {
  switch (action.type) {
    case 'SERIESINFO@LOAD_COMPLETE':
      return action.data;
    default:
      return state;
  }
}
