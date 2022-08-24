import actions from 'src/modules/algorand/asset/list/assetListActions';

const initialData = {
  loading: false,
  showcase: {},
  favoriteIds: [] as Array<any>,
  rows: [] as Array<any>,
  count: 0,
  pagination: {
    current: 1,
    pageSize: 20,
  },
  sorter: {},
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESET) {
    return {
      ...initialData
    };
  }

  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      favoriteIds: payload.favoriteIds,
      showcase: payload.showcase,
      rows: payload.rows,
      count: payload.count,
    };
  }

  if (type === actions.SORTER_CHANGED) {
    return {
      ...state,
      sorter: payload,
    };
  }

  if (type === actions.PAGINATION_CHANGED) {
    return {
      ...state,
      pagination: payload,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false
    };
  }

  return state;
};
