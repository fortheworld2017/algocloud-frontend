import { createSelector } from 'reselect';

const selectRaw = (state) => state.algorand.pool.list;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.loading),
);

const selectPools = createSelector(
  [selectRaw],
  (raw) => raw.rows,
);

const selectCount = createSelector(
  [selectRaw],
  (raw) => raw.count,
);

const selectPagination = createSelector(
  [selectRaw, selectCount],
  (raw, count) => {
    return {
      ...raw.pagination,
      total: count,
    };
  },
);

const selectOrderBy = createSelector([selectRaw], (raw) => {
  const sorter = raw.sorter;

  if (!sorter.field) {
    return 'id';
  }

  let direction =
    sorter.order === 'descend' ? 'DESC' : 'ASC';

  return `"${sorter.field}" ${direction}`;
});

const selectLimit = createSelector(
  [selectRaw],
  (raw) => raw.pagination.pageSize,
);

const selectOffset = createSelector([selectRaw], (raw) => {
  const pagination = raw.pagination;
  const current = pagination.current || 1;
  return (current - 1) * pagination.pageSize;
});

const selectHasRows = createSelector(
  [selectCount],
  (count) => count > 0,
);

const selectSorter = createSelector(
  [selectRaw],
  (raw) => raw.sorter,
);

const poolListSelectors = {
  selectLoading,
  selectPools,
  selectOrderBy,
  selectLimit,
  selectOffset,
  selectPagination,
  selectHasRows,
  selectSorter,
  selectRaw,
};

export default poolListSelectors;
