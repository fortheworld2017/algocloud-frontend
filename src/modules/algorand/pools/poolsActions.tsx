import Errors from 'src/modules/shared/error/errors';
import AlgorandService from 'src/modules/algorand/algorandService';

const prefix = 'ALGORAND_POOLS';

const poolsActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,


  doFetch: () => async (dispatch) => {
    try {
      dispatch({
        type: poolsActions.FETCH_STARTED,
      });

      const data = 'await AlgorandService.getAlgorandPools()';
      
      dispatch({
        type: poolsActions.FETCH_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: poolsActions.FETCH_ERROR,
      });
    }
  },

  doFetchHistory: (address) =>async (dispatch) => {
    try {
      dispatch({
        type: poolsActions.FETCH_STARTED
      });

      const data = 'await AlgorandService.getAlgorandPoolHistory(address)';
      
      dispatch({
        type: poolsActions.FETCH_SUCCESS,
        payload: { data },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: poolsActions.FETCH_ERROR,
      });
    }
  }
};

export default poolsActions;
