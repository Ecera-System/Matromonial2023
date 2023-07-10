import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminDashboard from '.components/AdminDashboard';

const isAuthenticated = () => {
  // Your authentication logic here
  // Example: Check if the user is logged in or has a valid token
  const token = localStorage.getItem('new_token');
  return token !== null;
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <AdminDashboard {...props} />
        ) : (
          <Redirect to="admin/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
