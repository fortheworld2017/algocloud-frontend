import React from 'react';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import {
  Redirect,
  Route,
  useLocation,
} from 'react-router-dom';
import Layout from 'src/view/layout/Layout';

function SuperadminRoute({
  component: Component,
  currentUser,
  permissionRequired,
  ...rest
}) {
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          null,
          currentUser,
        );

        if (!permissionChecker.isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: '/auth/signin',
                state: { from: location },
              }}
            />
          );
        }

        if (!permissionChecker.isEmailVerified) {
          return <Redirect to="/auth/email-unverified" />;
        }

        if (!permissionChecker.isUserActive) {
          return <Redirect to="/auth/inactive-user" />;
        }

        if (!permissionChecker.isUserSuperadmin) {
          return <Redirect to="/403" />;
        }

        if (!permissionChecker.match(permissionRequired)) {
          return <Redirect to="/403" />;
        }

        return (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}

export default SuperadminRoute;
