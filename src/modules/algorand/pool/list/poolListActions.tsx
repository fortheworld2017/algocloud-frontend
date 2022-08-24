import Errors from 'src/modules/shared/error/errors';
import AlgorandService from 'src/modules/algorand/algorandService';
import selectors from 'src/modules/algorand/pool/list/poolListSelectors';

const prefix = 'ALGORAND_POOL_LIST';

const poolListActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  RESET: `${prefix}_RESET`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,
  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,

  doReset: () => async (dispatch) => {
    dispatch({
      type: poolListActions.RESET,
    });
  },

  doFetch: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: poolListActions.FETCH_STARTED,
      });

      const data = await AlgorandService.getAlgorandPools(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );
      
      dispatch({
        type: poolListActions.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: poolListActions.FETCH_ERROR,
      });
    }
  },

  doChangeSort: (sorter) => async (dispatch) => {
    dispatch({
      type: poolListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(poolListActions.doFetch());
  },

  doChangePagination: (pagination) => async (dispatch) => {
    dispatch({
      type: poolListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(poolListActions.doFetch());
  },
};

export default poolListActions;
