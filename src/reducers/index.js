import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import authReducer from '../routes/Login/modules/login'

export default combineReducers({
	authReducer,
  router: routerReducer
})