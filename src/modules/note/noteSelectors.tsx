import { createSelector } from 'reselect';

const selectRaw = (state) => state.note;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const selectNotes = createSelector(
  [selectRaw],
  (raw) => raw.notes,
);

const noteSelectors = {
  selectLoading,
  selectNotes,
  selectRaw,
};

export default noteSelectors;
