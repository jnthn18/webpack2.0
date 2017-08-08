import React, { Component } from 'react';
import Chunk from 'components/Chunk';

const loadLoginContainer = () => import('routes/Login/containers/LoginContainer' /* webpackChunkName: "login" */);

class Login extends Component {
  render() {
    return <Chunk load={loadLoginContainer} />;
  }
}

export default Login;