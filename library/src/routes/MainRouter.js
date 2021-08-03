import { lazy } from '@loadable/component';
import React from 'react';
import { Link, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage'));

function MainRouter() {

  return (
    <Switch>
      <PublicRoute exact path="/login" redirect="/user">
        <LoginPage />
      </PublicRoute>
      <PrivateRoute exact path="/user" redirect="/login">
        <UserPage />
      </PrivateRoute>
      <PublicRoute exact path = "/signUp" redirect ="signUp">
        <SignUpPage/>
      </PublicRoute>
    </Switch>
  );
}

export default MainRouter;