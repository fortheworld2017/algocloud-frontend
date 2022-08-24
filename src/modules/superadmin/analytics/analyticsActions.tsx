import Errors from 'src/modules/shared/error/errors';
import SuperadminService from 'src/modules/superadmin/superadminService';

const prefix = 'SUPERADMIN_ANALYTICS';

const analyticsActions = {

  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,


  doFetch: () => async (dispatch) => {
    try {
      dispatch({
        type: analyticsActions.FETCH_STARTED,
      });

      const response = await SuperadminService.fetchAnalytics();
      
      dispatch({
        type: analyticsActions.FETCH_SUCCESS,
        payload: {
          userCount: response.userCount,
          tenantCount: response.tenantCount,
        },
      });

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: analyticsActions.FETCH_ERROR,
      });
    }
  },
};

export default analyticsActions;
