import { combineReducers } from 'redux';

import notifications from './notifications';
import countries from './countries';

export default combineReducers({
  notifications,
  countries,
});
