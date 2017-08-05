import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Login</Link></li>
				<li><Link to='/r'>Restricted</Link></li>
			</ul>
		</nav>
	</header>
)

export default Header