import { createSelector } from 'reselect';
import authSelectors from 'src/modules/auth/authSelectors';
import PermissionChecker from 'src/modules/auth/permissionChecker';
import Permissions from 'src/security/permissions';

const selectPermissionToUpdateUser = createSelector(
  [
    authSelectors.selectCurrentUser,
  ],
  (currentUser) =>
    new PermissionChecker(null, currentUser).match(
      Permissions.values.userUpdateSuperadmin,
    ),
);

const selectPermissionToDestroyTenant = createSelector(
  [
    authSelectors.selectCurrentUser,
  ],
  (currentUser) =>
    new PermissionChecker(null, currentUser).match(
      Permissions.values.tenantDestroySuperadmin,
    )
)


const superadminSelectors = {
  selectPermissionToUpdateUser,
  selectPermissionToDestroyTenant,
};

export default superadminSelectors;
