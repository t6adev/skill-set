import { createElement } from 'react';
import { render } from 'react-dom';

const renderApp = () => {
  render(createElement(require('./App').default), document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./App.jsx', renderApp);
}
