import actions from 'src/modules/algorand/global/globalActions';

const initialData = {
  loading: false,
  marketCapData: [] as Array<any>,
  algoPriceData: [] as Array<any>,
};

export default (state = initialData, { type, payload }) => {
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
      marketCapData: payload.marketCapData,
      algoPriceData: payload.algoPriceData,
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
