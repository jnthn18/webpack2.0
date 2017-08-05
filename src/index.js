import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router } from 'react-router-dom'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import reducers from './reducers' // Or wherever you keep your reducers

// // Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory()

// // Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history)

// // Add the reducer to your store on the `router` key
// // Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// )

import App from './components/App'

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// import Login from './Login'
// import Restricted from './Restricted'

// ReactDOM.render(
//   <Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */ }
//     <ConnectedRouter history={history}>
//       <div>
//         <header>
//           <nav>
//             <ul>
//               <li><Link to='/'>Login</Link></li>
//               <li><Link to='/r'>Restricted</Link></li>
//             </ul>
//           </nav>
//         </header>
//         <Switch>
//           <Route exact path="/" component={Login}/>
//           <Route path="/r" component={Restricted}/>
//         </Switch>
//       </div>
//     </ConnectedRouter>
//   </Provider>,
//   document.getElementById('root')
// )

render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))