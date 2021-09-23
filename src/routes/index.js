import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CountryDetailsPage from '../screens/CountryDetailsPage';
import HomePage from '../screens/HomePage';
import NotFoundPage from '../screens/NotFoundPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/country/:name" exact component={CountryDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
