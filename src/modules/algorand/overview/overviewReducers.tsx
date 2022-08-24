import actions from 'src/modules/algorand/overview/overviewActions';

const initialData = {
  loading: false,
  showcase: {},
  favorites: [] as Array<any>,
  stats: {
    daily: [] as Array<any>,
    weekly: [] as Array<any>,
  },
  favorite: {
    rows: [] as Array<any>,
    count: 0,
    pagination: {
      current: 1,
      pageSize: 10,
    },
    sorter: {},
  },
  asset: {
    rows: [] as Array<any>,
    count: 0,
    pagination: {
      current: 1,
      pageSize: 10,
    },
    sorter: {},
  },
  pool: {
    rows: [] as Array<any>,
    count: 0,
    pagination: {
      current: 1,
      pageSize: 10,
    },
    sorter: {},
  },
  lastUpdated: null
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESET) {
    return {
      ...initialData,
      lastUpdated: state.lastUpdated
    };
  }

  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.FAVORITE_SORTER_CHANGED) {
    const favorite = {
      ...state.favorite,
      sorter: payload,
    };

    return {
      ...state,
      favorite,
    };
  }

  if (type === actions.FAVORITE_PAGINATION_CHANGED) {
    const favorite = {
      ...state.favorite,
      pagination: payload,
    };

    return {
      ...state,
      favorite,
    };
  }

  if (type === actions.ASSET_SORTER_CHANGED) {
    const asset = {
      ...state.asset,
      sorter: payload,
    };

    return {
      ...state,
      asset,
    };
  }

  if (type === actions.ASSET_PAGINATION_CHANGED) {
    const asset = {
      ...state.asset,
      pagination: payload,
    };

    return {
      ...state,
      asset,
    };
  }

  if (type === actions.POOL_SORTER_CHANGED) {
    const pool = {
      ...state.pool,
      sorter: payload,
    };

    return {
      ...state,
      pool,
    };
  }

  if (type === actions.POOL_PAGINATION_CHANGED) {
    const pool = {
      ...state.pool,
      pagination: payload,
    };

    return {
      ...state,
      pool,
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    const stats = {
      daily: payload.dailyData,
      weekly: payload.weeklyData,
    };

    const favorite = {
      ...state.favorite,
      count: payload.favoriteCount,
      rows: payload.favorites,
    };

    const asset = {
      ...state.asset,
      count: payload.assetCount,
      rows: payload.assets,
    };

    const pool = {
      ...state.pool,
      count: payload.poolCount,
      rows: payload.pools,
    };

    return {
      ...state,
      loading: false,
      showcase: payload.showcase,
      favorites: payload.favoriteIds,
      favorite,
      stats,
      asset,
      pool,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false
    };
  }

  if (type === actions.LAST_UPDATED) {
    return {
      ...state,
      lastUpdated: payload.updatedTime
    };
  }

  return state;
};
