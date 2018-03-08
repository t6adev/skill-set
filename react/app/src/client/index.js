import { createElement } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const getReducer = () => require('./reducers').default;
const store = createStore(getReducer());
const renderApp = () => {
  render(
    createElement(Provider, { store }, createElement(require('./components/App').default)),
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App.jsx', renderApp);
  module.hot.accept('./reducers', () => {
    store.replaceReducer(getReducer());
  });
}
