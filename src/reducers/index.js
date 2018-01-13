import { UPDATE_VALUE, ZERO_VALUE, DELETE_VALUE, UPDATE_BASE } from '../actions/index';

const initialBase = 10;
const initialValidLabels = [...Array(initialBase).keys()].map(n => {
  const label = n.toString(initialBase).toUpperCase();
  return label;
});

const initialState = {
  value: 0,
  base: initialBase,
  memory: null,
  validLabels: initialValidLabels
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VALUE:
      return Object.assign({}, state, {
        value: action.value
      });
    case ZERO_VALUE:
      return Object.assign({}, state, {
        value: action.value
      });
    case DELETE_VALUE:
      return Object.assign({}, state, {
        value: action.value
      });
    case UPDATE_BASE:
      return Object.assign({}, state, {
        base: action.base,
        validLabels: action.validLabels
      });
    default:
      return state;
  }
}

export default reducer;