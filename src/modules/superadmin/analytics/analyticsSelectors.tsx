import { createSelector } from 'reselect';

const selectRaw = (state) => state.superadmin.analytics;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.loading),
);

const selectUserCount = createSelector(
  [selectRaw],
  (raw) => raw.userCount,
);

const selectTenantCount = createSelector(
  [selectRaw],
  (raw) => raw.tenantCount,
);

const analyticsSelectors = {
  selectLoading,
  selectUserCount,
  selectTenantCount,
  selectRaw,
};

export default analyticsSelectors;
