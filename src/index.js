import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, push } from 'react-router-redux'
import configureStore, { history } from './store/configureStore'
import Home from './Home'

const store = configureStore()

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/" component={Home} />
			</div>
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('root')
)