import React from 'react'
import { injectAsyncReducers } from 'store'
import Login from '../components/Login'
import authReducer from '../modules/login'

injectAsyncReducers({
    authReducer: authReducer
})

const LoginContainer = () => (
    <Login />
)

export default LoginContainer