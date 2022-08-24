import actions from 'src/modules/tenant/form/tenantFormActions';

const initialData = {
  saveLoading: false,
};

export default (state = initialData, { type, payload }) => {
  
  if (type === actions.CREATE_STARTED) {
    return {
      ...state,
      saveLoading: true,
    };
  }

  if (type === actions.CREATE_SUCCESS) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  if (type === actions.CREATE_ERROR) {
    return {
      ...state,
      saveLoading: false,
    };
  }

  return state;
};
