import React, { Component } from 'react';
import { Link } from 'react-router';

class RouteB extends Component {
  render() {
    return (
      <div>
        <h2>Route B</h2>
        <div className="links">
          <Link to="/route-b/step-1"> step 1 </Link>
          <Link to="/route-b/step-2"> step 2 </Link>
          <Link to="/route-b/step-3"> step 3 </Link>
          <Link to="/route-b/step-4"> step 4 </Link>
          <Link to="/route-b/step-5"> step 5 </Link>
        </div>
        {this.props.children}
      </div>
      );
  }
}

export default RouteB;
