import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Counter from './Counter';

const Main = () => <div>Hello World</div>;

export default () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/counter">counter</Link>
        </li>
      </ul>
      <Route exact path="/" component={Main} />
      <Route path="/counter" component={Counter} />
    </div>
  </Router>
);
