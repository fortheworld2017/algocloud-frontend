import list from 'src/modules/superadmin/tenant/list/tenantListReducers';
import form from 'src/modules/superadmin/tenant/form/tenantFormReducers';
import destroy from 'src/modules/superadmin/tenant/destroy/tenantDestroyReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  destroy,
});
