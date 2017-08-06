import React from 'react'
import styles from '../style.scss'

export const Login = (props) => {
	function handleSubmit(e) {
		e.preventDefault()
		const name = e.target.name.value
		const password = e.target.password.value
		
		props.loginUser({name: name, password: password})
	}

	return (
		<div className={styles.Login}>
			<h1>Login Form</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" placeholder="Username" />
				<br />
				<input type="password" name="password" placeholder="Password" />
				<br />
				<button>
					Login
				</button>
			</form>
		</div>
	)
}

Login.propTypes = {
	loginUser: React.PropTypes.func.isRequired
}

export default Login