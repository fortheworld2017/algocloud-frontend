import actions from 'src/modules/algorand/pool/show/poolShowActions';

const initialData = {
  loading: false,
  data: {
    'assetOneUnitName': '',
    'assetTwoUnitName': '',
    'assetOneReserves': '',
    'assetTwoReserves': '',
    'liquidity': '',
    'lastDayVolume': '',
    'lastWeekVolume': '',
  },
  hourlyOneRates: [] as Array<any>,
  hourlyTwoRates: [] as Array<any>,
  dailyOneRates: [] as Array<any>,
  dailyTwoRates: [] as Array<any>,
  dailyPoolData: [] as Array<any>,
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.RESET) {
    return initialData;
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
      data: payload.data,
      hourlyOneRates: payload.hourlyOneRates,
      hourlyTwoRates: payload.hourlyTwoRates,
      dailyOneRates: payload.dailyOneRates,
      dailyTwoRates: payload.dailyTwoRates,
      dailyPoolData: payload.dailyPoolData,
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
