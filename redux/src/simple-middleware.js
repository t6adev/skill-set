import { createStore, applyMiddleware } from 'redux';

const logger = store => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

const initState = {
  str: '',
};

const simpleReducer = (state = initState, action) => {
  const { type } = action;
  if (type === 'SET_STR') {
    return {
      ...state,
      str: action.val,
    };
  }
  return state;
};

const store = createStore(
  simpleReducer,
  applyMiddleware(logger)
);

store.dispatch({ val: 'nya-', type: 'SET_STR' });
store.dispatch({ val: 'nya-?', type: 'SET_STR' });
store.dispatch({ val: 'nya-!', type: 'SET_STR' });
