import { combineReducers } from 'redux';
import overview from 'src/modules/algorand/overview/overviewReducers';
import global from 'src/modules/algorand/global/globalReducers';
import favorite from 'src/modules/algorand/favorite/favoriteReducers';
import asset from 'src/modules/algorand/asset/assetReducers';
import pool from 'src/modules/algorand/pool/poolReducers';

export default combineReducers({
  overview,
  global,
  favorite,
  asset,
  pool,
});
