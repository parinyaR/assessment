import React from 'react';
import { Route, Switch, } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

import Mainpage from './pages/Mainpage';
import Detailpage from './pages/Detailpage';
import Notfoundpage from './pages/Notfoundpage';

function App() {
  return (
    <Fragment>
        <Switch>
          <Route path="/" exact>
            <Mainpage />
          </Route>
          <Route path="/detail/:id">
            <Detailpage/>
          </Route>
          <Route path="*">
            <Notfoundpage/>
          </Route>
        </Switch>
    </Fragment>
  );
}

export default App;
