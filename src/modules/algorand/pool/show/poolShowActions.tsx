import Errors from 'src/modules/shared/error/errors';
import AlgorandService from 'src/modules/algorand/algorandService';

const prefix = 'ALGORAND_POOL_SHOW';

const poolShowActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  RESET: `${prefix}_RESET`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,
  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,

  doReset: () => async (dispatch) => {
    dispatch({
      type: poolShowActions.RESET,
    });
  },

  doFetch: (address) => async (dispatch) => {
    try {
      dispatch({
        type: poolShowActions.FETCH_STARTED,
      });

      const data = await AlgorandService.getAlgorandPool(
        address,
      );

      dispatch({
        type: poolShowActions.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: poolShowActions.FETCH_ERROR,
      });
    }
  },
};

export default poolShowActions;
