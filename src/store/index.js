import { createStore, applyMiddleware, compose, combineReducers } from 'redux' 
import thunk from 'redux-thunk' 
import { createLogger } from 'redux-logger' 
import createHistory from 'history/createBrowserHistory' 
import { routerMiddleware } from 'react-router-redux' 
import rootReducer from '../reducers'

const logger = createLogger()
export const history = createHistory()
const router = routerMiddleware(history)  

const composeEnhancers = compose;
const store = createStore(combineReducers(rootReducer), composeEnhancers(applyMiddleware(thunk, logger, router)));
export default store;

/**
 * Register async loaded reducers in store and replace
 * current state-reducer with the a new reducer
 *
 * @export
 * @param {Object} store - the store object
 * @param {Object} asyncReducer - async reducer modules
 */
store.asyncReducers = {};

function replaceReducers(defaultReducers) {
  const merged = Object.assign({}, defaultReducers, store.asyncReducers);
  const combined = combineReducers(merged);
  store.replaceReducer(combined);
}

export function injectAsyncReducers(asyncReducers) {
  const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
    if (store.asyncReducers[item]) {
      delete all[item];
    }

    return all;
  }, asyncReducers);

  store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
  replaceReducers(rootReducer);
}

// hot reloading for reducers
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextReducer = require('../reducers').default; // eslint-disable-line

    replaceReducers(nextReducer);
  });
}