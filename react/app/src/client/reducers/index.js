const initState = {
  total: 0,
};

export default (state = initState, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      total: state.total + 1,
    };
  } else if (action.type === 'decrement') {
    return {
      ...state,
      total: state.total - 1,
    };
  }
  return state;
};
