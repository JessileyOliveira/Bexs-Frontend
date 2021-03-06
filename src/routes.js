import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Question from './pages/Question';
import Answer from './pages/Answer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Question} />
        <Route path="/question/:question_id" component={Answer} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
