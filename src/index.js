import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import App from './app.component';
import './index.css';

import { configureStore } from './redux/store';
import initialState from './redux/initialState';

document.addEventListener('DOMContentLoaded', async () => {
  const history = createBrowserHistory();
  const store = await configureStore(initialState, { history });
  ReactDOM.render(<App store={store} history={history}/>, document.getElementById('root'));
});
