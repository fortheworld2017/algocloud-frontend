import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import Message from 'src/view/shared/message';
import listActions from 'src/modules/superadmin/tenant/list/tenantListActions';
import SuperadminService from 'src/modules/superadmin/superadminService';

const prefix = 'SUPERADMIN_TENANT_DESTROY';

const tenantDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: tenantDestroyActions.DESTROY_STARTED,
      });

      await SuperadminService.destroyTenants([id]);

      dispatch({
        type: tenantDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(i18n('tenant.destroy.success'));

      await dispatch(listActions.doFetchCurrentFilter());
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: tenantDestroyActions.DESTROY_ERROR,
      });
    }
  },
};

export default tenantDestroyActions;
