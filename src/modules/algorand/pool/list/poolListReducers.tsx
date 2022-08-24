import actions from 'src/modules/algorand/pool/list/poolListActions';

const initialData = {
  loading: false,
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
