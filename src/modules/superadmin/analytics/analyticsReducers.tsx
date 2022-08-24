import actions from 'src/modules/superadmin/analytics/analyticsActions';

const initialData = {
  loading: false,
  userCount: 0,
  tenantCount: 0,
};

export default (state = initialData, { type, payload }) => {
  
  if (type === actions.FETCH_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      loading: false,
      userCount: payload.userCount,
      tenantCount: payload.tenantCount,
    };
  }

  if (type === actions.FETCH_ERROR) {
    return {
      ...state,
      loading: false,
      userCount: 0,
      tenantCount: 0,
    };
  }

  return state;
};
