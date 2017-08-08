import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'routes/Login'

import Header from 'components/Header';
// import './style.scss';

const App = () => (
  <main>
    <Header />

    <Switch>
    	<Route path="/r" component={Login} />
    </Switch>
  </main>
);

export default App;