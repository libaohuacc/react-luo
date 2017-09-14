import React from 'react';
import { HashRouter as Router, Route, Redirect,Switch } from 'react-router-dom'; //BrowserRouter
import {connect} from 'react-redux';

// ===================
// Containers
// ===================

import RootContainer from '../a_container/root';
import HomeContainer from '../a_container/home/index';
import FeaturesContainer from '../a_container/features/index';
import TestContainer from '../a_container/test/index';
import NotFoundContainer from '../a_container/notfound/index';

// ===================
// Exports
// ===================

class Routers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/home" component={HomeContainer}/>
            <Route exact path="/features" component={FeaturesContainer}/>
            <Route exact path="/test" component={TestContainer}/>
            <Route path="*" component={NotFoundContainer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(Routers);