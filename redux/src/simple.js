import { createStore } from 'redux';

const initState = {
  str: '',
  obj: {
    arr: [],
  },
};

const simpleReducer = (state = initState, action) => {
  const { type } = action;
  if (type === 'SET_STR') {
    return {
      ...state,
      str: action.val,
    };
  } else if (type === 'SET_OBJ_ARR') {
    const { obj } = state;
    const { arr } = obj;
    return {
      ...state,
      obj: {
        ...obj,
        arr: [...arr, action.val],
      },
    };
  }
  return state;
};

const store = createStore(simpleReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ val: 'nya-', type: 'SET_STR' });
store.dispatch({ val: 'nya-?', type: 'SET_STR' });
store.dispatch({ val: 'nya-!', type: 'SET_STR' });

store.dispatch({ val: 'nya-', type: 'SET_OBJ_ARR' });
store.dispatch({ val: 'nya-?', type: 'SET_OBJ_ARR' });
store.dispatch({ val: 'nya-!', type: 'SET_OBJ_ARR' });
