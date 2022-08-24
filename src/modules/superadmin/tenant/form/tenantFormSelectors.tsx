import { createSelector } from 'reselect';

const selectRaw = (state) => state.superadmin.tenant.form;

const selectSaveLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.saveLoading),
);

const tenantFormSelectors = {
  selectSaveLoading,
  selectRaw,
};

export default tenantFormSelectors;
