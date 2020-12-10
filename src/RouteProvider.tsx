import React from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import AppTopBar from './AppTopBar';
import Login from './features/auth/Login';
import Logout from './features/auth/Logout';
import PasswordReset from './features/auth/PasswordReset';
import Signup from './features/auth/Signup';
import Dashboard from './features/dashboard';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const RouteProvider: React.FC = () => {

  return (
    <Router>
      <AppTopBar />
      <Switch>
        <Route path="/login">
          <PublicRoute component={Login} />
        </Route>
        <Route path="/signup">
          <PublicRoute component={Signup} />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/forgot-password">
          <PublicRoute component={PasswordReset} />
        </Route>
        <Route path="/dashboard/records">
          <PrivateRoute component={Dashboard} />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouteProvider;