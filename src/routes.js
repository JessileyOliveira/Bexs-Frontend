import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Question from './pages/Question';
import Answer from './pages/Answer';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Question} />
        <Route path="/answer/:question_id" component={Answer} />
      </Switch>
    </BrowserRouter>
  );
}
