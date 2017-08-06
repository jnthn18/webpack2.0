import Restricted from './Restricted'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAuth } from '../../reducers'

const mapStateToProps = (state, props) => {
	return {
		...getAuth(state),
	}
}

export default withRouter(connect(mapStateToProps)(Restricted))