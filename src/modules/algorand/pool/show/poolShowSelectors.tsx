import { createSelector } from 'reselect';

const selectRaw = (state) => state.algorand.pool.show;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.loading),
);

const selectPool = createSelector(
  [selectRaw],
  (raw) => raw.data,
);

const selectPoolName = createSelector(
  [selectRaw],
  (raw) => `${raw.data.assetOneUnitName}-${raw.data.assetTwoUnitName}`,
);

const selectDailyOneRates = createSelector(
  [selectRaw],
  (raw) => raw.dailyOneRates,
);

const selectDailyTwoRates = createSelector(
  [selectRaw],
  (raw) => raw.dailyTwoRates,
);

const selectHourlyOneRates = createSelector(
  [selectRaw],
  (raw) => raw.hourlyOneRates,
);

const selectHourlyTwoRates = createSelector(
  [selectRaw],
  (raw) => raw.hourlyTwoRates,
);

const selectDailyPoolData = createSelector(
  [selectRaw],
  (raw) => raw.dailyPoolData,
);

const poolShowSelectors = {
  selectLoading,
  selectPool,
  selectPoolName,
  selectDailyOneRates,
  selectDailyTwoRates,
  selectHourlyOneRates,
  selectHourlyTwoRates,
  selectDailyPoolData,
  selectRaw,
};

export default poolShowSelectors;
