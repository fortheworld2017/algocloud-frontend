import { combineReducers } from 'redux';

import list from 'src/modules/algorand/asset/list/assetListReducers';
import show from 'src/modules/algorand/asset/show/assetShowReducers';

export default combineReducers({
  list,
  show,
});
