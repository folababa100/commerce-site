import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import ServicesPage from '../components/ServicesPage'
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import AboutPage from '../components/AboutPage';
import SignupPage from '../components/SignupPage';
import ContactPage from '../components/ContactPage';
// import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/signup" component={SignupPage} />
        <PublicRoute path="/dashboard" component={DashboardPage} />
        <PublicRoute path="/services" component={ServicesPage}/>
        <PublicRoute path="/contacts" component={ContactPage}/>
        <PublicRoute path="/about" component={AboutPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
