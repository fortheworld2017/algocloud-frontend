import { createSelector } from 'reselect';

const selectRaw = (state) => state.superadmin.tenant.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const tenantDestroySelectors = {
  selectLoading,
};

export default tenantDestroySelectors;