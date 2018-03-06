import { createElement } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);
const renderApp = () => {
  render(
    createElement(Provider, { store }, createElement(require('./components/App').default)),
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App.jsx', renderApp);
}
