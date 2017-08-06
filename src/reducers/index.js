import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import login, * as fromLogin from './loginReducer'
import restricted, * as fromRestricted from './restrictedReducer'

export default combineReducers({
	login,
  restricted,
  router: routerReducer
})

export const getLogin = ({login}) => login
export const getRestricted = ({restricted}) => restricted