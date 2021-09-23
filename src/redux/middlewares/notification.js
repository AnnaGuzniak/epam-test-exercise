import { showNotification } from '../actions/notifications';

const notificationMiddleware = store => next => action => {
  const isReduxForm = action.meta;
  if (action.error && !isReduxForm && !action.suppressNotification) {
    const defaultMessage = 'Server error occurred.';
    store.dispatch(
      showNotification({
        message: action?.error.message || defaultMessage,
      })
    );
  }
  next(action);
};

export default notificationMiddleware;
