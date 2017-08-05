import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import { ConnectedRouter, push } from 'react-router-redux'
import configureStore, { history } from './store/configureStore'
import Login from './Login'
import Restricted from './Restricted'

const store = configureStore()

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<header>
					<nav>
						<ul>
							<li><Link to='/'>Login</Link></li>
							<li><Link to='/r'>Restricted</Link></li>
						</ul>
					</nav>
				</header>
				<Switch>
					<Route path='/' component={Login} />
					<Route path='/r' component={Restricted} />
				</Switch>
			</div>
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('root')
)