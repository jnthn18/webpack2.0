import Login from './Login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getLogin } from '../reducers'

const mapStateToProps = (state, props) => {
	return {
		...getLogin(state),
	}
}

export default withRouter(connect(mapStateToProps)(Login))