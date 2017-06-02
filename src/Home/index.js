import Home from './Home'
import { connect } from 'react-redux'
import { getHome } from '../reducers'

const mapStateToProps = (state, props) => {
	return {
		...getHome(state),
	}
}

export default connect(mapStateToProps)(Home)