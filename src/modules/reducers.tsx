import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import superadmin from 'src/modules/superadmin/superadminReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import customer from 'src/modules/customer/customerReducers';
import product from 'src/modules/product/productReducers';
import order from 'src/modules/order/orderReducers';
import algorand from 'src/modules/algorand/algorandReducers';
import overview from 'src/modules/algorand/overview/overviewReducers';
import note from 'src/modules/note/noteReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    superadmin,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    customer,
    product,
    order,
    algorand,
    overview,
    note
  });
