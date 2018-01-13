const number1 = (state = 0.0, action) => {
  switch (action.type) {
    case 'UPDATE':
      return state + action.text;
    default:
      return state;
  }
}

export default number1;