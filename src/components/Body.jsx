import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import List from './List';

function Body() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/list' component={ List } />
      </Switch>

    </div>
  );
}

export default Body;
