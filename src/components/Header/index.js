import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Login</Link></li>
				<li><Link to='/r'>Restricted</Link></li>
			</ul>
		</nav>
	</header>
)