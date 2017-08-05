import { combineReducers } from 'redux'
import login, * as fromLogin from './loginReducer'
import restricted, * as fromRestricted from './restrictedReducer'

export default combineReducers({
	login,
  restricted
})

export const getLogin = ({login}) => login
export const getRestricted = ({restricted}) => restricted