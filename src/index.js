import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { ConnectedRouter } from 'react-router-redux'

import configureStore, { history } from './store'
import App from './components/App';

const store = configureStore()

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const renderApp = Component => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer>
          <Component />
        </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

renderApp(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('components/App', () => renderApp(App));
}