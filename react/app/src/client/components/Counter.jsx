import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ dispatch, total }) => (
  <div>
    <div>total: {total}</div>
    <div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  </div>
);

export default connect(({ total }) => ({ total }))(Counter);
