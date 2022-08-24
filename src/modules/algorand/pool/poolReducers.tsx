import { combineReducers } from 'redux';

import list from 'src/modules/algorand/pool/list/poolListReducers';
import show from 'src/modules/algorand/pool/show/poolShowReducers';

export default combineReducers({
  list,
  show,
});
