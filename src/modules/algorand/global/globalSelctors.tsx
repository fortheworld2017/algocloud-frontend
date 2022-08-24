import { createSelector } from 'reselect';

const selectRaw = (state) => state.algorand.global;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.loading),
);

const selectMarketCapData = createSelector(
  [selectRaw],
  (raw) => raw.marketCapData,
);

const selectAlgoPriceData = createSelector(
  [selectRaw],
  (raw) => raw.algoPriceData,
);

const globalSelectors = {
  selectLoading,
  selectMarketCapData,
  selectAlgoPriceData,
  selectRaw,
};

export default globalSelectors;
