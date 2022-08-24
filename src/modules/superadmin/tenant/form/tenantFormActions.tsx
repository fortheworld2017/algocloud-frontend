import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';
import SuperadminService from 'src/modules/superadmin/superadminService';

const prefix = 'SUPERADMIN_TENANT_FORM';

const tenantFormActions = {
  RESET: `${prefix}_RESET`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,


  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: tenantFormActions.CREATE_STARTED,
      });

      await SuperadminService.createTenant(values);

      dispatch({
        type: tenantFormActions.CREATE_SUCCESS,
      });

      getHistory().push('/superadmin/tenant');

    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: tenantFormActions.CREATE_ERROR,
      });
    }
  },
};

export default tenantFormActions;
