import React, { Component } from 'react';
import { Link } from 'react-router';

class RouteZero extends Component {
  render() {
    return (
      <div>
        <h2>Route 0</h2>
        <div>
          <Link to="/route-0/step-1"> step 1 </Link>
          <Link to="/route-0/step-2"> step 2 </Link>
          <Link to="/route-0/step-3"> step 3 </Link>
          <Link to="/route-0/step-4"> step 4 </Link>
          <Link to="/route-0/step-5"> step 5 </Link>
        </div>
        {this.props.children}
      </div>
      );
  }
}

export default RouteZero;
