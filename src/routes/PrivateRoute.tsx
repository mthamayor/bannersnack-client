import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import storage from '../lib/storage';


const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route {...rest} render={() => (
      storage.getUser()
        ? <Component />
        : <Redirect to='/signup' />
    )} />
  )

export default PrivateRoute;