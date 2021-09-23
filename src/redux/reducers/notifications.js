import { notifications as initialState } from '../initialState/notifications';

import { SHOW_NOTIFICATION, CLEAR_NOTIFICATION } from '../actions/notifications';

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export default function createReducer(state = initialState, action) {
  let draft = {};
  switch (action.type) {
    case SHOW_NOTIFICATION:
      draft = { ...state };
      draft[generateId()] = { ...action };

      return {
        ...draft,
      };

    case CLEAR_NOTIFICATION:
      draft = { ...state };
      delete draft[action.id];
      console.log(draft);
      return {
        ...draft,
      };

    default:
      return state;
  }
}
