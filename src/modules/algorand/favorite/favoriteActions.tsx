import Errors from 'src/modules/shared/error/errors';
import AlgorandService from 'src/modules/algorand/algorandService';
import selectors from 'src/modules/algorand/favorite/favoriteSelectors';

const prefix = 'ALGORAND_FAVORITE';

const favoriteActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  RESET: `${prefix}_RESET`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,
  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,

  doReset: () => async (dispatch) => {
    dispatch({
      type: favoriteActions.RESET,
    });
  },

  doFetch: () => async (dispatch, getState) => {
    try {
      dispatch({
        type: favoriteActions.FETCH_STARTED,
      });

      const data = await AlgorandService.getAlgorandFavorites(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );
      
      dispatch({
        type: favoriteActions.FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: favoriteActions.FETCH_ERROR,
      });
    }
  },

  doFavorite: (assetId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: favoriteActions.FETCH_STARTED,
      });

      await AlgorandService.putAlgorandFavorite(assetId);

      const data = await AlgorandService.getAlgorandFavorites(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: favoriteActions.FETCH_SUCCESS,
        payload: data,
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: favoriteActions.FETCH_ERROR,
      });
    }
  },

  doShowcase: (assetId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: favoriteActions.FETCH_STARTED,
      });

      await AlgorandService.putAlgorandShowcase(assetId);

      const data = await AlgorandService.getAlgorandFavorites(
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: favoriteActions.FETCH_SUCCESS,
        payload: data,
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: favoriteActions.FETCH_ERROR,
      });
    }
  },

  doChangeSort: (sorter) => async (dispatch) => {
    dispatch({
      type: favoriteActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(favoriteActions.doFetch());
  },

  doChangePagination: (pagination) => async (dispatch) => {
    dispatch({
      type: favoriteActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(favoriteActions.doFetch());
  },
};

export default favoriteActions;
