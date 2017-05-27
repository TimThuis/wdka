import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from './App';

import RouteZero from './routes/routeZero/RouteZero.js'
import RouteA from './routes/routeA/RouteA.js'
import RouteB from './routes/routeB/RouteB.js'

import R0I1 from './routes/routeZero/steps/r0-i1/r0-i1.js'
import R0I2 from './routes/routeZero/steps/r0-i2/r0-i2.js'
import R0I3 from './routes/routeZero/steps/r0-i3/r0-i3.js'
import R0V1 from './routes/routeZero/steps/r0-v1/r0-v1.js'
import R0V2 from './routes/routeZero/steps/r0-v2/r0-v2.js'

import RAV1 from './routes/routeA/steps/rA-v1/rA-v1.js'
import RAV2 from './routes/routeA/steps/rA-v2/rA-v2.js'
import RAV3 from './routes/routeA/steps/rA-v3/rA-v3.js'
import RAV4 from './routes/routeA/steps/rA-v4/rA-v4.js'
import RAI1 from './routes/routeA/steps/rA-i1/rA-i1.js'

import RBV1 from './routes/routeB/steps/rB-v1/rB-v1.js'
import RBV2 from './routes/routeB/steps/rB-v2/rB-v2.js'
import RBV3 from './routes/routeB/steps/rB-v3/rB-v3.js'
import RBV4 from './routes/routeB/steps/rB-v4/rB-v4.js'
import RBI1 from './routes/routeB/steps/rB-i1/rB-i1.js'

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} >
      <Route path="/route-0" component={RouteZero}>
        <Route path="/route-0/step-1" component={R0I1} />
        <Route path="/route-0/step-2" component={R0I2} />
        <Route path="/route-0/step-3" component={R0V1} />
        <Route path="/route-0/step-4" component={R0V2} />
        <Route path="/route-0/step-5" component={R0I3} />
      </Route>

      <Route path="/route-a" component={RouteA}>
        <Route path="/route-a/step-1" component={RAV1} />
        <Route path="/route-a/step-2" component={RAV2} />
        <Route path="/route-a/step-3" component={RAV3} />
        <Route path="/route-a/step-4" component={RAI1} />
        <Route path="/route-a/step-5" component={RAV4} />
      </Route>

      <Route path="/route-b" component={RouteB}>
        <Route path="/route-b/step-1" component={RBV1} />
        <Route path="/route-b/step-2" component={RBV2} />
        <Route path="/route-b/step-3" component={RBV3} />
        <Route path="/route-b/step-4" component={RBI1} />
        <Route path="/route-b/step-5" component={RBV4} />
      </Route>
    </Route>
    <Redirect from="/start" to="/route-0/step-1" />
  </Router>
);

export default Routes;
