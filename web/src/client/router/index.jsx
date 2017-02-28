import React from 'react';
import { Route, Switch } from 'react-router-dom';

import RouteAuthorized from './matchauth';

import About from './../components/about';
import Contact from './../components/contact';
import Home from './../components/home';
import Search from './../components/search/search-wizard';
import Signin from './../components/auth/signin';
import Signup from './../components/auth/signup';
import Signout from './../components/auth/signout';
import Todos from './../components/todos';
import UserProfile from './../components/auth/user-profile';
import UserWizard from './../components/auth/user-wizard';

const router = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/search" component={Search} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/signout" component={Signout} />
    <RouteAuthorized path="/todos" component={Todos} />
    <RouteAuthorized path="/user-profile" component={UserProfile} />
    <RouteAuthorized path="/user-wizard" component={UserWizard} />
  </Switch>
);

export default router;
