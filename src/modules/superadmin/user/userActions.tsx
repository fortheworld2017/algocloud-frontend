import SuperadminService from 'src/modules/superadmin/superadminService';
import selectors from 'src/modules/superadmin/user/userSelectors';
import Errors from 'src/modules/shared/error/errors';

const prefix = 'SUPERADMIN_USER';

const userActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  RESETED: `${prefix}_RESETED`,
  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  doReset: () => async (dispatch) => {
    dispatch({
      type: userActions.RESETED,
    });

    dispatch(userActions.doFetch());
  },

  doUpdate: (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: userActions.UPDATE_STARTED,
      });

      await SuperadminService.updateUser(id);

      dispatch({
        type: userActions.UPDATE_SUCCESS,
      })

      dispatch(userActions.doFetchCurrentFilter());
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userActions.UPDATE_ERROR,
      });
    }
  },

  doFetchCurrentFilter: () => async (
    dispatch,
    getState,
  ) => {
    const filter = selectors.selectFilter(getState());
    const rawFilter = selectors.selectRawFilter(getState());
    dispatch(userActions.doFetch(filter, rawFilter, true));
  },

  doFetch: (filter?, rawFilter?, keepPagination = false) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: userActions.FETCH_STARTED,
        payload: { filter, rawFilter, keepPagination },
      });

      const response = await SuperadminService.fetchUsers(
        filter,
        selectors.selectOrderBy(getState()),
        selectors.selectLimit(getState()),
        selectors.selectOffset(getState()),
      );

      dispatch({
        type: userActions.FETCH_SUCCESS,
        payload: {
          rows: response.rows,
          count: response.count,
        },
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: userActions.FETCH_ERROR,
      });
    }
  },

  doChangePagination: (pagination) => async (
    dispatch,
    getState,
  ) => {
    dispatch({
      type: userActions.PAGINATION_CHANGED,
      payload: pagination,
    });

    dispatch(userActions.doFetchCurrentFilter());
  },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: userActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(userActions.doFetchCurrentFilter());
  },
};

export default userActions;
