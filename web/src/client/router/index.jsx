import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RouteAuthorized from './matchauth';

import Home from './../components/home';
import Signin from './../components/auth/signin';
import Signup from './../components/auth/signup';
import Signout from './../components/auth/signout';
import Todos from './../components/todos';
import About from './../components/about';

const router = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/signout" component={Signout} />
    <RouteAuthorized path="/todos" component={Todos} />
    <RouteAuthorized path="/about" component={About} />
  </Switch>
);

export default router;
