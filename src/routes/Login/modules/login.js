// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
export const requestLogin = (creds) => ({
  type: LOGIN_REQUEST,
  isFetching: true,
  isAuthenticated: false,
  payload: creds
})

export const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  isFetching: false,
  isAuthenticated: true,
  payload: user
})

export const loginError = (message) => ({
  type: LOGIN_FAILURE,
  isFetching: false,
  isAuthenticated: false,
  payload: message
})

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const loginUser = (creds) => (
  (dispatch, getState) => {
    dispatch(requestLogin(creds))

    return new Promise((resolve) => {
      setTimeout(() => {
        // This would normally return user profile object
        dispatch(receiveLogin('123abc'))
        resolve()
      }, 500)
    })
  }
)

export const actions = {
  requestLogin,
  loginUser
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [LOGIN_REQUEST]    : (state, action) => {
    return {
      ...state,
      user: action.payload,
      isFetching: action.isFetching
    }
  },
  [LOGIN_SUCCESS] : (state, action) => {
    return {
      ...state,
      isFetching: action.isFetching,
      isAuthenticated: action.isAuthenticated,
      user: {
        name: state.user.name,
        token: action.payload
      }
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isAuthenticated: false,
  isFetching: false,
  user: {
    name: '',
    password: '',
    token: ''
  }
}
export default function authReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
