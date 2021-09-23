export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const CLEAR_NOTIFICATION = 'CLEAR_NOTIFICATION';

export function showNotification({ message }) {
  return dispatch => {
    dispatch({
      type: SHOW_NOTIFICATION,
      message,
    });
  };
}

export function clearNotification (id) {
  return dispatch => {
    dispatch({
      type: CLEAR_NOTIFICATION,
      id,
    });
  };
}
