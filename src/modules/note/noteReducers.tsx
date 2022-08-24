import actions from './noteActions';

const initialData = {
  loading: false,
  notes: []
};

export default (state = initialData, { type, payload }) => {
  if (type === actions.LOAD_START) {
    return {
      ...state,
      loading: true,
    };
  }
  if (type === actions.LOAD_END) {
    return {
      ...state,
      loading: false,
    };
  }
  if (type === actions.CREATE_STARTED) {
    return {
      ...state,
      loading: true,
    };
  }

  if (type === actions.CREATE_SUCCESS) {
    return {
      ...state,
      loading: false,
      notes: payload
    };
  }

  if (type === actions.CREATE_ERROR) {
    return {
      ...state,
      loading: false,
    };
  }

  if (type === actions.FETCH_SUCCESS) {
    return {
      ...state,
      notes: payload,
      loading: false,
    };
  }

  if (type === actions.DELETE_SUCCESS) {
    return {
      ...state,
      notes: payload,
      loading: false,
    };
  }
  return state;
};
