import { createStore, applyMiddleware, compose } from 'redux' 
import thunk from 'redux-thunk' 
import { createLogger } from 'redux-logger' 
import createHistory from 'history/createBrowserHistory' 
import { routerMiddleware } from 'react-router-redux' 
import appReducer from '../reducers' 
 
const logger = createLogger() 
 
// Create a history of your choosing (we're using a browser history in this case) 
export const history = createHistory() 
 
const router = routerMiddleware(history) 
 
export default function configureStore(initialState) { 
  const enhancer = compose( 
    applyMiddleware( 
      thunk, 
      logger, 
      router 
    ) 
  ) 
  const store = createStore(appReducer, initialState, enhancer) 
 
  return store 
}