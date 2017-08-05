import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from '../Login/Login'
import Restricted from '../Restricted/Restricted'

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route path='/r' component={Restricted} />
			<Redirect to='/r' />
		</Switch>
	</main>
)

export default Main