import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ServicesPage from '../components/ServicesPage'
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import AboutPage from '../components/AboutPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/services" component={ServicesPage}/>
        <PublicRoute path="/about" component={AboutPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
