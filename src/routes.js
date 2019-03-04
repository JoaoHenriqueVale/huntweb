import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import Porduct from './pages/product';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/products/:id" component={Porduct} />
        </Switch>
      </BrowserRouter>
    )
  }
};

export default Routes;