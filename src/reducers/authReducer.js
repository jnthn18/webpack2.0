const DEFAULT_STATE = {
	isAuthenticated: false,
	isFetching: false,
	user: {
		name: '',
		password: ''
	}
}

export default (state = DEFAULT_STATE, {type, payload}) => {
	switch(type) {
		case 'LOGIN_REQUEST':
      return {
      	...state,
        isFetching: true,
        isAuthenticated: false,
        user: payload.creds
      }
    case 'LOGIN_SUCCESS':
      return {
      	...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: 'Somethin went wrong'
      }
    case 'LOGIN_FAILURE':
      return {
      	...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: payload.message
      }
		default:
			return state
	}
}