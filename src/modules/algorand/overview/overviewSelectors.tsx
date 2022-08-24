import { createSelector } from 'reselect';

const selectRaw = (state) => state.algorand.overview;

const selectLoading = createSelector(
  [selectRaw],
  (raw) => Boolean(raw.loading),
);

const selectDailyData = createSelector(
  [selectRaw],
  (raw) => raw.stats.daily,
);

const selectWeeklyData = createSelector(
  [selectRaw],
  (raw) => raw.stats.weekly,
);

const selectAssets = createSelector(
  [selectRaw],
  (raw) => raw.asset.rows,
);

const selectPools = createSelector(
  [selectRaw],
  (raw) => raw.pool.rows,
);

const selectFavorites = createSelector(
  [selectRaw],
  (raw) => raw.favorite.rows,
);

const selectFavoriteIds = createSelector(
  [selectRaw],
  (raw) => raw.favorites,
);

const selectShowcase = createSelector(
  [selectRaw],
  (raw) => raw.showcase,
);

const selectShowcaseId = createSelector(
  [selectShowcase],
  (showcase) => showcase.assetId,
);

const selectAssetCount = createSelector(
  [selectRaw],
  (raw) => raw.asset.count,
);

const selectAssetPagination = createSelector(
  [selectRaw, selectAssetCount],
  (raw, count) => {
    return {
      ...raw.asset.pagination,
      total: count,
    };
  },
);

const selectPoolCount = createSelector(
  [selectRaw],
  (raw) => raw.pool.count,
);

const selectPoolPagination = createSelector(
  [selectRaw, selectPoolCount],
  (raw, count) => {
    return {
      ...raw.pool.pagination,
      total: count,
    };
  },
);

const selectFavoriteCount = createSelector(
  [selectRaw],
  (raw) => raw.favorite.count,
);

const selectFavoritePagination = createSelector(
  [selectRaw, selectFavoriteCount],
  (raw, count) => {
    return {
      ...raw.favorite.pagination,
      total: count,
    };
  },
);

const selectHasAssetRows = createSelector(
  [selectAssetCount],
  (count) => count > 0,
);

const selectHasPoolRows = createSelector(
  [selectPoolCount],
  (count) => count > 0,
);

const selectHasFavoriteRows = createSelector(
  [selectFavoriteCount],
  (count) => count > 0,
);

const selectAssertSorter = createSelector(
  [selectRaw],
  (raw) => raw.asset.sorter,
);

const selectPoolSorter = createSelector(
  [selectRaw],
  (raw) => raw.pool.sorter,
);

const selectFavoriteSorter = createSelector(
  [selectRaw],
  (raw) => raw.favorite.sorter,
);

const selectFavoriteFilter = createSelector(
  [selectRaw],
  (raw) => {
    const sorter = raw.favorite.sorter;
    let orderBy;

    if (!sorter.field) {
      orderBy = 'id';
    } else {
      const direction = sorter.order === 'descend' ? 'DESC' : 'ASC';
      orderBy = `"${sorter.field}" ${direction}`;
    }

    const limit = raw.favorite.pagination.pageSize;
    const current = raw.favorite.pagination.current;
    const offset = (current > 0) ? (current - 1) * limit : 0;

    return {
      orderBy,
      limit,
      offset,
    }
  }
);

const selectAssetFilter = createSelector(
  [selectRaw],
  (raw) => {
    const sorter = raw.asset.sorter;
    let orderBy;

    if (!sorter.field) {
      orderBy = `id`;
    } else {
      const direction = sorter.order === 'descend' ? 'DESC' : 'ASC';
      orderBy = `"${sorter.field}" ${direction}`;
    }

    const limit = raw.asset.pagination.pageSize;
    const current = raw.asset.pagination.current;
    const offset = (current > 0) ? (current - 1) * limit : 0;

    return {
      orderBy,
      limit,
      offset,
    }
  }
);

const selectPoolFilter = createSelector(
  [selectRaw],
  (raw) => {
    const sorter = raw.pool.sorter;
    let orderBy;

    if (!sorter.field) {
      orderBy = `id`;
    } else {
      const direction = sorter.order === 'descend' ? 'DESC' : 'ASC';
      orderBy = `"${sorter.field}" ${direction}`;
    }

    const limit = raw.pool.pagination.pageSize;
    const current = raw.pool.pagination.current;
    const offset = (current > 0) ? (current - 1) * limit : 0;

    return {
      orderBy,
      limit,
      offset,
    }
  }
);

const selectLastUpdatedTime = createSelector(
  [selectRaw],
  (raw) => {
    const lastUpdated = raw.lastUpdated;

    return lastUpdated
  }
);

const overviewSelectors = {
  selectLoading,
  selectDailyData,
  selectWeeklyData,
  selectAssets,
  selectPools,
  selectFavorites,
  selectFavoriteIds,
  selectShowcase,
  selectShowcaseId,
  selectAssetPagination,
  selectPoolPagination,
  selectFavoritePagination,
  selectHasAssetRows,
  selectHasPoolRows,
  selectHasFavoriteRows,
  selectAssertSorter,
  selectPoolSorter,
  selectFavoriteSorter,
  selectFavoriteFilter,
  selectAssetFilter,
  selectPoolFilter,
  selectLastUpdatedTime,
  selectRaw,
};

export default overviewSelectors;
