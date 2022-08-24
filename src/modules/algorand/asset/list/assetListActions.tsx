import Errors from 'src/modules/shared/error/errors';
import AlgorandService from 'src/modules/algorand/algorandService';
import selectors from 'src/modules/algorand/asset/list/assetListSelectors';

const prefix = 'ALGORAND_ASSET_LIST';

const assetListActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  RESET: `${prefix}_RESET`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,
  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,

  doReset: () => async (dispatch) => {
    dispatch({
      type: assetListActions.RESET,
    });
  },

  doFetch: (reload=true) => async (dispatch, getState) => {
    try {
      if (reload) {
        dispatch({
          type: assetListActions.FETCH_STARTED,
        });
      }

      const data = await AlgorandService.getAlgorandAssets(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );
      
      dispatch({
        type: assetListActions.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assetListActions.FETCH_ERROR,
      });
    }
  },

  doFavorite: (assetId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: assetListActions.FETCH_STARTED,
      });

      await AlgorandService.putAlgorandFavorite(assetId);

      const data = await AlgorandService.getAlgorandAssets(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: assetListActions.FETCH_SUCCESS,
        payload: data,
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assetListActions.FETCH_ERROR,
      });
    }
  },

  doShowcase: (assetId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: assetListActions.FETCH_STARTED,
      });

      await AlgorandService.putAlgorandShowcase(assetId);

      const data = await AlgorandService.getAlgorandAssets(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: assetListActions.FETCH_SUCCESS,
        payload: data,
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: assetListActions.FETCH_ERROR,
      });
    }
  },

  doChangeSort: (sorter) => async (dispatch) => {
    dispatch({
      type: assetListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(assetListActions.doFetch());
  },

  doChangePagination: (pagination) => async (dispatch) => {
    dispatch({
      type: assetListActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(assetListActions.doFetch());
  },
};

export default assetListActions;
