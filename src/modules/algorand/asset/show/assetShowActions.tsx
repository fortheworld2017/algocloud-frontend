import Errors from 'src/modules/shared/error/errors';
import AlgorandService from 'src/modules/algorand/algorandService';
import selectors from 'src/modules/algorand/asset/show/assetShowSelectors';

const prefix = 'ALGORAND_ASSET_SHOW';

const assetShowActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  RESET: `${prefix}_RESET`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,
  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,

  doReset: () => async (dispatch) => {
    dispatch({
      type: assetShowActions.RESET,
    });
  },

  doFetch: (assetId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: assetShowActions.FETCH_STARTED,
      });

      const data = await AlgorandService.getAlgorandAsset(
        assetId,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: assetShowActions.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assetShowActions.FETCH_ERROR,
      });
    }
  },

  doChangeSort: (assetId, sorter) => async (dispatch) => {
    dispatch({
      type: assetShowActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(assetShowActions.doFetch(assetId));
  },

  doChangePagination: (assetId, pagination) => async (dispatch) => {
    dispatch({
      type: assetShowActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(assetShowActions.doFetch(assetId));
  },
};

export default assetShowActions;
