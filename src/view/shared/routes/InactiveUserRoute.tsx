import PermissionChecker from 'src/modules/auth/permissionChecker';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function InactiveUserRoute({
  component: Component,
  currentTenant,
  currentUser,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          currentTenant,
          currentUser,
        );

        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/auth/signin',
              }}
            />
          );
        }

        if (!permissionChecker.isEmailVerified) {
          return <Redirect to="/auth/email-unverified" />;
        }

        if (permissionChecker.isUserActive) {
            return <Redirect to="/" />
        }

        return <Component {...props} />;
      }}
    />
  );
}

export default InactiveUserRoute;
