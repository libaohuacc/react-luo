import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom'; //BrowserRouter
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

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

  /** 重定向 **/
  requireAuth(container) {
    return withRouter(class myApp extends React.Component {
      
      render() {
        return container;
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/home" component={HomeContainer}/>
            <Route exact path="/features" component={withRouter(FeaturesContainer)}/>
            <Route exact path="/test" component={withRouter(TestContainer)}/>
            <Route path="*" component={withRouter(NotFoundContainer)}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(Routers);