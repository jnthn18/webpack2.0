import { combineReducers } from 'redux'
import home, * as fromHome from './homeReducer'

export default combineReducers({
  home,
})

export const getHome = ({home}) => home